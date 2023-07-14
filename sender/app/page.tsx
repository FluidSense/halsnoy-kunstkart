/* Components */
import { HeaderScripts } from "./components/Map/HeaderScripts";
import dynamic from "next/dynamic";
import { streetArtFont } from "./intro/page";
//@ts-ignore

const LazyMap = dynamic(() => import("./components/Map/Map"), {
  ssr: false,
  loading: () => (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1 className={streetArtFont.className}>Laster inn</h1>
    </main>
  ),
});

export default function IndexPage() {
  return (
    <>
      <LazyMap />
      <HeaderScripts />
    </>
  );
}

export const metadata = {
  title: "Halsnøy Gatekunstkart",
};
