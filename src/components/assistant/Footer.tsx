import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Animated, StyleSheet } from "react-native";
import { NextButton } from "../buttons/NextButton";

type Props = {
  nextAction: () => void;
};

export const Footer = (props: Props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <NextButton title={t("next")} onPress={props.nextAction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 166,
    width: "100%",
    position: "absolute",
  },
});
