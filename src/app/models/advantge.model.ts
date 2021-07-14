import { Image } from './intro.model';

export interface Advantage {
  id: number;
  created_at: Date;
  updated_at: Date;
  Contenido: Content[];
}

export interface Content {
  __component: string;
  id: number;
  description: string;
  title: string;
  modal_image?: Image[];
}
