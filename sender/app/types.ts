export type Art = {
  position: {
    lat: number;
    lng: number;
  };
  description: any[];
  title: string;
  image: {
    url: string;
    lqip: string;
    dimensions: {
      width: number;
      aspectRatio: number;
      height: number;
    };
  };
};
