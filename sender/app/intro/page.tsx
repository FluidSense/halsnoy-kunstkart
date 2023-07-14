import { fetchArts } from "@/app/components/ListView/ArtList";
import { streetArtFont } from "@/app/components/streetArtFont";
import { imageToSlide } from "@/lib/photo_album/utils";
import Link from "next/link";
import PhotoAlbum from "react-photo-album";

// Bruker standard react-styling her, siden emotion krever use-client og det ikke funka så bra

export default async function IndexPage() {
  const arts = await fetchArts();
  const allImages = [
    ...arts.map((art) => art.image),
    ...arts.map((art) => art.additionalImages ?? []).flat(),
  ];
  const srcSet = allImages.map((image) => imageToSlide(image));
  const { first, second } = splitArrayInHalf(srcSet);
  return (
    <main
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ width: "100dvw" }}>
        <PhotoAlbum layout="rows" photos={first} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 className={streetArtFont.className}>Halsnøy Gatekunst</h1>
        <p>Halsnøy er en øy full av kunst på vegger, kriker og kroker.</p>
        <Link
          href="/"
          style={{
            marginTop: "2rem",
            display: "inline-block",
            color: "rgb(32, 84, 158)",
            fontWeight: "bold",
          }}
        >
          Gå til kart &rarr;
        </Link>
      </div>
      <div style={{ width: "100dvw" }}>
        <PhotoAlbum layout="rows" photos={second} />
      </div>
    </main>
  );
}

function splitArrayInHalf(list: any[]): { first: any[]; second: any[] } {
  const half = Math.ceil(list.length / 2);
  const first = list.slice(0, half);
  const second = list.slice(half);
  return { first, second };
}
