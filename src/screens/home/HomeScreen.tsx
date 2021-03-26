import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { View, Animated } from "react-native";
import { HomeHeader } from "../../components/header";
import { Content } from "../../components/home/Content";

export const HomeScreen = ({}) => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader />
      <Content />
    </SafeAreaView>
  );
};
