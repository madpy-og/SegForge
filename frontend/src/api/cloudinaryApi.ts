import type { UploadSchema } from "../schemas/input/UploadSchema";

const getSignature = async (
  fileType: string,
  fileSize: number,
  uploadType: string,
) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/cloudinary/signature`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileType, fileSize, uploadType }),
      },
    );

    if (!res.ok) {
      console.log("Failed to get signature");
      return;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Internal server error");
  }
};

export const uploadToCloudinary = async (
  { image }: UploadSchema,
  uploadType: string,
) => {
  try {
    const signatureData = await getSignature(
      image.type,
      image.size,
      uploadType,
    );

    if (!signatureData) {
      throw new Error("Failed to get signature");
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("signature", signatureData.signature);
    formData.append("timestamp", String(signatureData.timestamp));
    formData.append("api_key", signatureData.apiKey);
    formData.append("folder", signatureData.folder);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!res.ok) {
      console.log("Failed to upload image");
      return;
    }

    const data = await res.json();
    return {
      imageUrl: data.secure_url,
    };
  } catch (error) {
    console.log("Internal server error");
  }
};
