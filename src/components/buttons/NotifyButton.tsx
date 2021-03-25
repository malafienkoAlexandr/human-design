import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";

type Props = {
  title: string;
  enabled: boolean;
  onPress: () => void;
};

export const NotifyButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: THEME.GREY_COLOR_40,
  },
  title: {
    textAlign: "center",
    paddingLeft: 16,
    alignSelf: "center",
    paddingRight: 16,
    fontSize: 13,
    fontWeight: "500",
  },
});
