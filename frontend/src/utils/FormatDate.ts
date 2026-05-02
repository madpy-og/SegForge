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

export function formatDate(dateString: string | Date): string {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Tanggal tidak valid";
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = BULAN_INDONESIA[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  } catch (error) {
    return "Tanggal tidak valid";
  }
}
