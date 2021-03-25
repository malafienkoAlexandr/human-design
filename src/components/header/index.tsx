import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { THEME } from "../../theme";
import { useTranslation } from "react-i18next";
import { BodygraphButton } from "../buttons/BodygraphButton";
import { SettingsButton } from "../buttons/SettingsButton";
import { Digest } from "Digest";
import { DigestComponent } from "../digest";
import { UserLogo } from "../UserLogo";

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

export const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.ellipseRow}>
          <UserLogo imgPath="" onPress={() => console.log("press")} />
          <Text style={styles.title}>Привет, Alexandr</Text>
          <SettingsButton
            onPress={() => console.log("Press settings button")}
          />
        </View>
        <Text style={styles.text}>
          Ты, Манифестирующий генератор, профиль 4/1 оппортунист исследователь
        </Text>
        <BodygraphButton
          title="Твой бодиграф"
          onPress={() => console.log("Text")}
        />
        <DigestComponent items={DATA} onPress={() => console.log("")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  rect: {
    flexDirection: "column",
    width: "100%",
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
  icon: {
    color: THEME.BLACK_COLOR_APP,
    fontSize: 24,
    height: 0,
    width: 0,
    marginLeft: 271,
    marginTop: 3,
  },
  ellipseRow: {
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },

  materialButtonLight: {
    height: 25,
    width: 144,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12,
    marginTop: 27,
    marginLeft: 64,
  },
});
