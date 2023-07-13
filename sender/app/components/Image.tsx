"use client";
import NextImage from "next/image";
import { Art } from "../types";

export function Image(art: Art) {
  return (
    <NextImage
      src={art.image.url}
      alt={art.title}
      fill={true}
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

function loader({
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
