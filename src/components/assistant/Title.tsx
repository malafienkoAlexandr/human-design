import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { THEME } from "../../theme";

type Props = {
  title: string;
  description: string;
};

export const Title = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  title: {
    textAlign: "center",
    color: THEME.WHITE_COLOR,
    fontSize: 32,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    color: THEME.WHITE_COLOR,
    fontSize: 15,
    fontWeight: "400",
  },
});
