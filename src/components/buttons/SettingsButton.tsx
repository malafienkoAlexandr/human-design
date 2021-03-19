import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import SettingsIcon from "../../../assets/settingsIcon.svg";

type Props = {
  onPress(): void;
};

export const SettingsButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <SettingsIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    marginRight: 0,
    marginLeft: 16,
  },
});
