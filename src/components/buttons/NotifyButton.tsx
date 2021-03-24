import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    textAlign: "center",
    paddingLeft: 16,
    alignSelf: "center",
    paddingRight: 16,
  },
});
