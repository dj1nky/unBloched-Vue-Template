export const createParts = (text) => {
  // Process line breaks first
  let processedText = text.replace(/\n/g, "<br>");

  // Split the text by HTML tags for formatting
  // This regex captures <em>...</em>, <color>...</color>, <br>, and combinations of em/color
  const splitRegex =
    /(<em>[^<]+<\/em>|<color>[^<]+<\/color>|<em><color>[^<]+<\/color><\/em>|<color><em>[^<]+<\/em><\/color>|<br>)/g;
  const rawParts = processedText.split(splitRegex);

  // Transform each part into a structured object
  return rawParts.map((part) => {
    if (part === "<br>") {
      return {
        type: "linebreak",
        content: "",
      };
    } else if (
      (part.startsWith("<em><color>") && part.endsWith("</color></em>")) ||
      (part.startsWith("<color><em>") && part.endsWith("</em></color>"))
    ) {
      // Handle both combinations of nested tags
      let content = part;
      content = content.replace(/<em><color>|<color><em>/, "");
      content = content.replace(/<\/color><\/em>|<\/em><\/color>/, "");
      return {
        type: "italic-colored",
        content: content,
      };
    } else if (part.startsWith("<em>") && part.endsWith("</em>")) {
      return {
        type: "italic",
        content: part.slice(4, -5), // Remove the <em> and </em> tags
      };
    } else if (part.startsWith("<color>") && part.endsWith("</color>")) {
      return {
        type: "colored",
        content: part.slice(7, -8), // Remove the <color> and </color> tags
      };
    } else {
      return {
        type: "normal",
        content: part,
      };
    }
  });
};
