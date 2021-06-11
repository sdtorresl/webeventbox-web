// To parse this data:
//
//   import { Convert, Intro } from "./file";
//
//   const intro = Convert.toIntro(json);

export interface Intro {
  id?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  contenido?: Contenido[];
}

export interface Contenido {
  __component?: string;
  id: number;
  title: string;
  image: Image;
}

export interface Image {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Formats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url: string;
  previewUrl?: null;
  provider?: string;
  provider_metadata?: null;
  created_at?: Date;
  updated_at?: Date;
}

export interface Formats {
  thumbnail?: Thumbnail;
}

export interface Thumbnail {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  width?: number;
  height?: number;
  size?: number;
  path?: null;
  url?: string;
}

// Converts JSON strings to/from your types
export class IntroConvert {
  public static toIntro(json: string): Intro {
    return JSON.parse(json);
  }

  public static introToJson(value: Intro): string {
    return JSON.stringify(value);
  }
}
