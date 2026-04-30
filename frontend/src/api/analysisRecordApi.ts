export const getAllAnalysisRecord = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record`,
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
