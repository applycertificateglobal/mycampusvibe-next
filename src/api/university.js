export async function getUniversities() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/universities?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch universities");
  return await res.json();
}
