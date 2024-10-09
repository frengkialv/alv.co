export async function getBrands() {
  try {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/brands`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    throw new Error("Failed to fetch data");
  }
}
