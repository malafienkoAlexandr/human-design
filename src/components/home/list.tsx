import React from "react";
import { FlatList, Text } from "react-native";
import { Home } from "Home";
import { Transit } from "Transit";
import { PersonalForecast } from "PersonalForecast";
import { PersonalForecastType } from "../../enums";
import { User } from "UserModule";
import { Single } from "Single";
import { Today } from "./Today";

const today: Single = {
  title: "Сегодня",
  description: "Настоящая динамо-машина с самым большим энергетическим...",
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
    type: PersonalForecastType.general,
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
      style={{ height: "100%", width: "100%", backgroundColor: "white" }}
      data={DATA}
      renderItem={(item) => {
        console.log(item);
        return <Today item={item.item.today} isOnNotify={true} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};
