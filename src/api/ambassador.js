export async function getAmbassadors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ambassadors?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch ambassadors");
  return await res.json();
}
