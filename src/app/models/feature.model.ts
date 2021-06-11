import { Image } from "./image.model";

export interface Feature {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  main_description?: string;
  images_title?: string;
  Contenido?: Content[];
  stage_1?: Stage;
  stage_2?: Stage;
  stage_3?: Stage;
}

export interface Stage {
  id: number;
  title: string;
  sub_title?: null;
  image: Image;
}

export interface Content {
  __component?: string;
  id: number;
  description: string;
  image: Image;
}

// Converts JSON strings to/from your types
export class FeatureConvert {
  public static toFeature(json: string): Feature {
    return JSON.parse(json);
  }

  public static featureToJson(value: Feature): string {
    return JSON.stringify(value);
  }
}
