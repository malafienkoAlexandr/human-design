import React from "react";
import { ScrollView, StyleSheet, View, Animated } from "react-native";
import { Transit } from "Transit";
import { PersonalForecast } from "PersonalForecast";
import { PersonalForecastType } from "../../enums";
import { User } from "UserModule";
import { Single } from "Single";
import { Today } from "./Today";
import { TransitList } from "./Transit";
import { PersonalForecastList } from "./PersonalForecast";
import { DigestComponent } from "../digest/index";
import { Digest } from "Digest";
import { Friends } from "./Friends";
import { THEME } from "../../theme";
import { Bodygraph } from "./Bodygraph";

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

const DATA: Digest[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Third Item",
  },
];

type Props = {
  // offset: number;
  scrollDidScroll: (value: number) => void;
};

export const Content = (props: Props) => {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{
        paddingTop: 90,
      }}
      scrollEventThrottle={16}
      // onScroll={Animated.event(
      //   [{ nativeEvent: { contentOffset: { y: props.offset } } }],
      //   { useNativeDriver: false }
      // )}
      onScroll={(obj) => {
        props.scrollDidScroll(-obj.nativeEvent.contentOffset.y);
      }}
    >
      <Bodygraph
        title="Твой бодиграф"
        onPress={() => console.log("on press")}
      />
      <DigestComponent items={DATA} onPress={() => console.log("")} />
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
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 16,
    marginTop: 2,
    flex: 1,
  },
  text: {
    color: THEME.GREY_COLOR_60,
    fontSize: 13,
    marginTop: 4,
    marginLeft: 64,
    marginRight: 16,
  },
});
