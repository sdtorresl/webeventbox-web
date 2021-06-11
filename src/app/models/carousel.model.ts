// To parse this data:
//
//   import { Convert, Carousel } from "./file";
//
//   const carousel = Convert.toCarousel(json);

export interface Carousel {
  id:             number;
  created_at:     Date;
  updated_at:     Date;
  slider_content: SliderContent[];
}

export interface SliderContent {
  __component: string;
  id:          number;
  desktop:     Media;
  mobile:      Media;
}

export interface Media {
  id:                number;
  name:              string;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           null;
  hash:              string;
  ext:               string;
  mime:              string;
  size:              number;
  url:               string;
  previewUrl:        null;
  provider:          string;
  provider_metadata: null;
  created_at:        Date;
  updated_at:        Date;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCarousel(json: string): Carousel {
      return JSON.parse(json);
  }

  public static carouselToJson(value: Carousel): string {
      return JSON.stringify(value);
  }
}
