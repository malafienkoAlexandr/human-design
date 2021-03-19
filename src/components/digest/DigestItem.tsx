import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export const DigestItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#f9c2ff",
    padding: 8,
    justifyContent: "flex-end",
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 13,
    textAlign: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
