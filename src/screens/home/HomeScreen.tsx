import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { View, Animated } from "react-native";
import { HomeHeader } from "../../components/header";
import { THEME } from "../../theme";
import { Content } from "../../components/home/Content";

export const HomeScreen = ({}) => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        backgroundColor: THEME.BLACK_COLOR_APP,
        width: "100%",
      }}
    >
      <SafeAreaView>
        <HomeHeader />
        <Content />
      </SafeAreaView>
    </View>
  );
};
