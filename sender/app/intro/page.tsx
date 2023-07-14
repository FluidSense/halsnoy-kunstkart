import { fetchArts } from "@/app/components/ListView/ArtList";
import { streetArtFont } from "@/app/components/streetArtFont";
import PhotoAlbum from "react-photo-album";

export default async function IndexPage() {
  const arts = await fetchArts();
  return (
    <main>
      {/*<PhotoAlbum layout="masonry" photos={} />*/}
      <h1 className={streetArtFont.className}>Halsnøy Gatekunst</h1>
    </main>
  );
}
