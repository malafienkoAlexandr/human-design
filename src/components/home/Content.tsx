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

const friendsData: User[] = [];

export const Content = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  scroll: {
    width: "100%",
    backgroundColor: "white",
  },
});
