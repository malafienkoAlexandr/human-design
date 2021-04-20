import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";

type Props = {
  title: string;
  onPress: () => void;
};

export const PlaceInput = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>
          {props.title.length === 0
            ? t("assistant.place_birth_placeholder")
            : props.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
  },
  text: {
    paddingBottom: 16,
    color: THEME.WHITE_COLOR_60,
    fontSize: 15,
    textAlign: "center",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: THEME.WHITE_COLOR_60,
  },
});
