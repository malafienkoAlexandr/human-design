import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  enabled: boolean;
};

export const NotifyButton = (props: Props) => {
  return (
    <TouchableOpacity>
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
    borderColor: "red",
  },
  title: {
    textAlign: "center",
    paddingLeft: 16,
    alignSelf: "center",
    paddingRight: 16,
  },
});
