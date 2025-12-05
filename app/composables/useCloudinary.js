export const useCloudinary = () => {
  const cloudName = "dsuj8bw8y";
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  // Change this to your company or site name
  const companyName = "unbloched";

  /**
   * Get Cloudinary image URL
   * @param {string} path - Path to image (e.g., 'elder55' or 'concert/photo1' or 'voices-of-adelaide/elder55')
   * @param {object} options - Transformation options
   * @returns {string} - Full Cloudinary URL
   */
  const getImageUrl = (path, options = {}) => {
    const transformations = [];

    // Width
    if (options.width) transformations.push(`w_${options.width}`);

    // Height
    if (options.height) transformations.push(`h_${options.height}`);

    // Quality (default: auto)
    transformations.push(`q_${options.quality || "auto"}`);

    // Format (default: webp for better optimization)
    transformations.push(`f_${options.format || "webp"}`);

    // Crop mode
    if (options.crop) transformations.push(`c_${options.crop}`);

    const transformString =
      transformations.length > 0 ? `/${transformations.join(",")}` : "";

    const fullPath = path.startsWith(`${companyName}/`)
      ? path
      : `/${companyName}/${companyName}/${path}`;

    // Remove file extension from path if present (Cloudinary uses format transformation instead)
    const pathWithoutExtension = fullPath.replace(
      /\.(webp|jpg|jpeg|png|gif)$/i,
      ""
    );

    return `${baseUrl}${transformString}/${pathWithoutExtension}`;
  };

  return {
    getImageUrl,
  };
};
