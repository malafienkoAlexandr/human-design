import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";

import NextIcon from "../../../assets/nextArraw.svg";

type Props = {
  title: string;
  style?: ViewStyle;
  onPress(): void;
};

export const NextButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={styles.text}>{props.title}</Text>
        <View style={styles.image}>
          <NextIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    paddingLeft: 32,
  },
  image: {
    flex: 0,
    alignContent: "space-between",
    alignItems: "flex-end",
    marginRight: 16,
  },
});
