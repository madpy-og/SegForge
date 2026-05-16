import { type AddAnalysisRecordSchema } from "../schemas/input/AddAnalysisRecordSchema";

export const getAllAnalysisRecord = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record`,
      {
        credentials: "include",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to get analysis records data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAnalysisRecordById = async (id: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record/${id}`,
      {
        credentials: "include",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to get analysis record data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addAnalysisRecord = async ({
  userId,
  imageUrl,
  imageSize,
  analysisResult,
  processingDuration,
}: AddAnalysisRecordSchema) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          imageUrl,
          imageSize,
          analysisResult,
          processingDuration,
        }),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to analyze image");
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAnalysisRecordById = async (id: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to delete analysis record data");
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
