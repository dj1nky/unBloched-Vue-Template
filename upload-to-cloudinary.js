import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Change this to your company or site name
const companyName = "unbloched";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Directory containing images to upload
const IMAGES_DIR = path.join(__dirname, "public", "images");

// Recursive function to get all image files
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Upload images to Cloudinary
async function uploadImages() {
  console.log("🚀 Starting image upload to Cloudinary...\n");

  const images = getAllImages(IMAGES_DIR);
  console.log(`Found ${images.length} images to upload\n`);

  const results = [];

  for (const imagePath of images) {
    try {
      // Get relative path from postimages folder
      const relativePath = path.relative(IMAGES_DIR, imagePath);
      const folder = path.dirname(relativePath);
      const publicId = path.join(
        companyName,
        folder,
        path.parse(imagePath).name
      );

      console.log(`Uploading: ${relativePath}...`);

      const result = await cloudinary.uploader.upload(imagePath, {
        public_id: publicId,
        folder: companyName,
        resource_type: "image",
        overwrite: false,
      });

      console.log(`✅ Uploaded: ${result.secure_url}\n`);

      results.push({
        originalPath: imagePath,
        relativePath,
        cloudinaryUrl: result.secure_url,
        publicId: result.public_id,
      });
    } catch (error) {
      console.error(`❌ Failed to upload ${imagePath}:`, error.message, "\n");
    }
  }

  // Save mapping file
  const mappingPath = path.join(__dirname, "cloudinary-mapping.json");
  fs.writeFileSync(mappingPath, JSON.stringify(results, null, 2));
  console.log(`\n📝 Saved URL mapping to: ${mappingPath}`);
  console.log(
    `\n✨ Upload complete! ${results.length}/${images.length} images uploaded successfully`
  );
}

uploadImages().catch(console.error);
