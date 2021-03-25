import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PersonalForecast } from "PersonalForecast";

type Props = {
  item: PersonalForecast;
  onPress: () => void;
};

export const ForecastItem = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.main}>
        <Text>{props.item.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 120,
    height: 120,
    backgroundColor: "black",
    borderRadius: 8,
  },
  text: {},
});
