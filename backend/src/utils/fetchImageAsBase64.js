export const fetchImageAsBase64 = async (imageUrl) => {
  const res = await fetch(imageUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch image");
  }

  const buffer = Buffer.from(await res.arrayBuffer());

  return {
    imageBase64: buffer.toString("base64"),
    mimeType: res.headers.get("content-type"),
    imageSize: buffer.length,
  };
};
