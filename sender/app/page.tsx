/* Components */
import { HeaderScripts } from "./components/Map/HeaderScripts";
import dynamic from "next/dynamic";
//@ts-ignore

const LazyMap = dynamic(() => import("./components/Map/Map"), { ssr: false });

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
