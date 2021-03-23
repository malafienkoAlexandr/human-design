import React from "react";
import { FlatList, SectionList, Text } from "react-native";
import { Home } from "Home";
import { Transit } from "Transit";
import { PersonalForecast } from "PersonalForecast";
import { PersonalForecastType } from "PersonalForecastType";
import { User } from "UserModule";
import { Single } from "Single";
import { Today } from "./Today";

const today: Single = {
  title: "",
  description: "",
};

const transitData: Transit[] = [
  {
    id: "0",
    title: "transit",
    description: "description",
  },
];

const personalForecastData: PersonalForecast[] = [
  {
    id: "0",
    type: { type: "" },
    text: "",
  },
];

const friendsData: User[] = [];

const DATA: Home[] = [
  {
    id: "0",
    today: today,
    transit: transitData,
    personalForecast: personalForecastData,
    friends: friendsData,
  },
];

export const HomeList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={(item) => {
        return <Today item={item.item.today} isOnNotify={true} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};
