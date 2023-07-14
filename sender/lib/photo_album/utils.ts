import { SanityImage } from "@/app/types";
import { urlFor } from "@/lib/sanity/utils";

export function imageToSlide(image: SanityImage) {
  return {
    src: image.url,
    blurDataURL: image.lqip,
    width: image.dimensions.width,
    height: image.dimensions.height,
    srcSet: imageToSrcSet({
      url: image.url,
      aspectRatio: image.dimensions.aspectRatio,
    }),
  };
}

export function imageToSrcSet({
  url,
  aspectRatio,
}: {
  url: string;
  aspectRatio: number;
}) {
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  return breakpoints.map((breakpoint) => ({
    src: urlFor(url).width(breakpoint).url(),
    width: breakpoint,
    height: Math.floor(breakpoint / aspectRatio),
  }));
}
