declare module "PersonalForecast" {
  export type PersonalForecast = {
    id: string;
    type: PersonalForecastType;
    text: string;
  };
}

declare module "Transit" {
  export type Transit = {
    id: string;
    title: string;
    description: string;
  };
}

declare module "Single" {
  export type Single = {
    title: string;
    description: string;
  };
}

declare module "Home" {
  import { User } from "User";

  export type Home = {
    id: string;
    today: Single;
    transit: Transit[];
    personalForecast: PersonalForecast[];
    friends: User[];
  };
}
