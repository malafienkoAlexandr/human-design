import React, { Component } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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

type Props = {
  animValue: number;
};

const HEADER_HEIGHT = 90;

export const HomeHeader = (props: Props) => {
  const insets = useSafeAreaInsets();
  const headerHeight = HEADER_HEIGHT + props.animValue;
  // props.animValue.interpolate({
  //   inputRange: [0, HEADER_HEIGHT + insets.top],
  //   outputRange: [HEADER_HEIGHT + insets.top, insets.top + 90],
  //   extrapolate: "clamp",
  // });
  return (
    <Animated.View
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        position: "absolute",
        height: headerHeight,
        backgroundColor: THEME.BLACK_COLOR_APP,
        overflow: "hidden",
      }}
    >
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
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BLACK_COLOR_APP,
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
  ellipseRow: {
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
});
