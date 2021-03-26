import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Transit } from "Transit";
import { PersonalForecast } from "PersonalForecast";
import { PersonalForecastType } from "../../enums";
import { User } from "UserModule";
import { Single } from "Single";
import { Today } from "./Today";
import { TransitList } from "./Transit";
import { PersonalForecastList } from "./PersonalForecast";
import { Friends } from "./Friends";
import { THEME } from "../../theme";

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
  {
    id: "1",
    type: PersonalForecastType.general,
    text: "",
  },
  {
    id: "2",
    type: PersonalForecastType.general,
    text: "",
  },
];

const friendsData: User[] = [
  {
    id: "0001",
    name: "Оксана",
    birthDate: "",
    birthTime: "",
    utc: 1,
    city: "",
    country: "",
  },
];

export const Content = () => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{ marginBottom: 100 }}
    >
      <Today
        item={today}
        isOnNotify={true}
        onPress={() => console.log("press")}
      />
      <TransitList items={transitData} onPress={() => console.log("press")} />
      <PersonalForecastList
        items={personalForecastData}
        onPress={() => console.log("press")}
      />
      <Friends
        items={friendsData}
        onPress={() => console.log("press")}
        addAction={() => console.log("press")}
        showAllAction={() => console.log("press")}
      ></Friends>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    backgroundColor: THEME.WHITE_COLOR,
  },
});
