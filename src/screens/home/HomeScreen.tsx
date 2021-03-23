import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { HomeHeader } from "../../components/header";
import { HomeList } from "../../components/home/list";
import { THEME } from "../../theme";

export const HomeScreen = ({}) => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        backgroundColor: THEME.BLACK_COLOR_APP,
        width: "100%",
      }}
    >
      <SafeAreaView>
        <HomeHeader />
        <HomeList />
      </SafeAreaView>
    </View>
  );
};
