// To parse this data:
//
//   import { Convert, ContactModel } from "./file";
//
//   const contactModel = Convert.toContactModel(json);

export interface ContactModel {
  comment?: string;
  name?:    string;
  email?:   string;
  phone?:   string;
  company?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toContactModel(json: string): ContactModel {
      return JSON.parse(json);
  }

  public static contactModelToJson(value: ContactModel): string {
      return JSON.stringify(value);
  }
}
