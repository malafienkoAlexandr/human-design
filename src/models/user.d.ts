declare module "UserInfoModule" {
  export type UserInfo = {
    profile: string;
    type: string;
    authority: string;
    definition: number;
    personalGates: number[];
    designGates: number[];
    superActiveNumbers: number[];
    channel: string[];
  };
}

declare module "UserModule" {
  import { Column, Primary } from "sqlite-ts";
  export type User = {
    id: string;
    name: string;
    birthDate: string;
    birthTime: string;
    utc: number;
    birthPlce: string;
    info?: UserInfo;
  };
}
