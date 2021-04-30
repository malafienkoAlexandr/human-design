import Realm from "realm";

export class User {
  public id: string = "";
  public name: string = "";
  public birthDate: string = "";
  public birthTime: string = "";
  public utc: number = 0;
  public birthPlace: string = "";

  public static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "id",
    properties: {
      id: "string",
      name: "string",
      birthDate: "string",
      birthTime: "string",
      utc: "int",
      birthPlace: "string",
    },
  };
}

export class Info {
  public id: string = "";
  public type: string = "";
  public userId: string = "";
  public authority: string = "";
  public definition: number = 0;
  public personalGates: string = "";
  public designGates: string = "";
  public superActiveNumbers: string = "";
  public channels: string = "";
  public profile: string = "";

  public static schema: Realm.ObjectSchema = {
    name: "Info",
    primaryKey: "id",
    properties: {
      id: "string",
      type: "string",
      userId: "string",
      authority: "string",
      definition: "float",
      personalGates: "string",
      designGates: "string",
      superActiveNumbers: "string",
      channels: "string",
      profile: "string",
    },
  };
}
