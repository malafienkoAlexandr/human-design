declare module "typesafe-actions" {
  import {} from "typesafe-actions";
  export type Services = typeof import("./index").default;
}

declare module "navigation-types" {
  export type RootStackParamList = {
    Assistant: undefined;
    Home: undefined;
    Places: undefined;
  };
}
