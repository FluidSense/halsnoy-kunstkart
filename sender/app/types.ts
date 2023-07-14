export type Art = {
  position: {
    lat: number;
    lng: number;
  };
  description: any[];
  title: string;
  image: SanityImage;
  author?: string;
  additionalImages?: SanityImage[];
};

export type SanityImage = {
  url: string;
  lqip: string;
  dimensions: {
    width: number;
    aspectRatio: number;
    height: number;
  };
};
