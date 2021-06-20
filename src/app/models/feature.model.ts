import { Image } from "./image.model";

export interface Feature {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  main_description?: string;
  images_title?: string;
  Contenido?: Content[];
  stage_1: Stage;
  stage_2: Stage;
  stage_3: Stage;
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
