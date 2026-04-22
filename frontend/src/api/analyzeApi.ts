export const analyze = async (imageUrl: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/analyze`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: imageUrl,
      }),
    });

    if (!res.ok) {
      console.log("Failed to analyze image");
      return;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
