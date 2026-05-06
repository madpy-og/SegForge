const BULAN_INDONESIA = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatDate(
  dateString: string | Date | null | undefined,
): string {
  try {
    // Handle null/undefined
    if (!dateString) {
      return new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }

    const date = new Date(dateString);

    // Validasi
    if (isNaN(date.getTime())) {
      console.warn("Invalid date:", dateString);
      return "Tanggal tidak valid";
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = BULAN_INDONESIA[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Tanggal tidak valid";
  }
}
