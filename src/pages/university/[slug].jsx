// src/pages/university/[slug].jsx
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UniversityPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useSWR(
    slug
      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/universities?filters[slug][$eq]=${slug}&populate=deep`
      : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  const university = data.data[0]?.attributes;

  if (!university) return <p>No university found</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">{university.name}</h1>
      <p className="text-gray-600">Slug: {slug}</p>
    </div>
  );
}
