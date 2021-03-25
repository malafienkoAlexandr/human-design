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
  item: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#f9c2ff",
    paddingLeft: 4,
    justifyContent: "flex-end",
    marginVertical: 16,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 11,
    textAlign: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
