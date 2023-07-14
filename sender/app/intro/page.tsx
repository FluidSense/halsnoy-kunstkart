import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./AreaStencil.ttf" });

export default function IndexPage() {
  return (
    <main>
      <h1 className={myFont.className}>Halsnøy Gatekunst</h1>
    </main>
  );
}
