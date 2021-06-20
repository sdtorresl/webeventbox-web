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
  thumbnail?: Small;
  small?: Small;
}

export interface Small {
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
