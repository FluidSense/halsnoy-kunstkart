"use client";
import NextImage from "next/image";
import { Art } from "../types";

type Props = {
  art: Art;
  onClick?: () => void;
};

export function Image(props: Props) {
  const { art, onClick } = props;
  return (
    <NextImage
      src={art.image.url}
      alt={art.title}
      fill={true}
      onClick={onClick}
      style={{
        objectFit: "cover",
        borderBottomLeftRadius: "5px",
        borderTopLeftRadius: "5px",
      }}
      loader={loader}
      blurDataURL={art?.image?.lqip}
      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export function loader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const maybeQuality = quality ? `&q=${quality}` : "";
  return `${src}?w=${width}${maybeQuality}`;
}
