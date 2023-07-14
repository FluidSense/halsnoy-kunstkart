import { Art } from "@/app/types";
import { ArtCard } from "./Card";

export async function ArtList() {
  const arts = await fetchArts();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {arts.map((art) => (
        <ArtCard {...art} />
      ))}
    </div>
  );
}

// Eksempel på hvordan typescript "lyver". Jeg har ikke validert at dette promiset matcher min type.
export async function fetchArts(): Promise<Art[]> {
  const query =
    '*[_type == "streetArt"]{title, position, description, "image": image.asset -> {"lqip": metadata.lqip, "dimensions": metadata.dimensions, url}}';
  const result = await fetch(
    `https://ijubg5pm.api.sanity.io/v2023-07-11/data/query/production?query=${query}`,
    { next: { revalidate: 30000 } }
  );
  const json = await result.json();
  return json.result;
}
