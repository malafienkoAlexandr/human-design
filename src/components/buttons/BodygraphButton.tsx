import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  style?: ViewStyle;
  onPress(): void;
};

export const BodygraphButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{ alignSelf: "flex-start" }}
      onPress={props.onPress}
    >
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
