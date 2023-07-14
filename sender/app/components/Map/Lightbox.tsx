import ReactLightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./NextJsImage";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  slides: SlideImage[];
};

export default function LightBox({ open, setOpen, slides }: Props) {
  return (
    <ReactLightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      render={{ slide: NextJsImage }}
    />
  );
}
