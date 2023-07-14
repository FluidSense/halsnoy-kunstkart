import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
export const streetArtFont = localFont({ src: "./AreaStencil.ttf" });

export default function IndexPage() {
  return (
    <main>
      <h1 className={streetArtFont.className}>Halsnøy Gatekunst</h1>
    </main>
  );
}
