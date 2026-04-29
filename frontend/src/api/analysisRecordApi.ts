export const getAllAnalysisRecord = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/analysis-record`,
      {
        credentials: "include",
      },
    );

    if (!res.ok) {
      console.error("failed to get analysis record data");
      return;
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
      console.error("Failed to delete analysis record data");
      return;
    }

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
