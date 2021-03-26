import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { View, Animated } from "react-native";
import { HomeHeader } from "../../components/header";
import { Content } from "../../components/home/Content";
import { THEME } from "../../theme";

export const HomeScreen = ({}) => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader animValue={offset} />
      <Content scrollDidScroll={(value) => console.log(value)} />
    </SafeAreaView>
  );
};
