import ReactLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage, { NextImageCompatibleSlide } from "./NextJsImage";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  slides: NextImageCompatibleSlide[];
};

export default function LightBox({ open, setOpen, slides }: Props) {
  return (
    <ReactLightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      //@ts-ignore
      render={{ slide: NextJsImage }}
      carousel={{ finite: true }}
      plugins={[Thumbnails]}
    />
  );
}
