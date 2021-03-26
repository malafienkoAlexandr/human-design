import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PersonalForecast } from "PersonalForecast";
import { User } from "UserModule";
import { THEME } from "../../theme";
import { UserLogo } from "../UserLogo";

type Props = {
  item: User;
  onPress: () => void;
};

export const Friend = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.main}>
        <UserLogo disabled={true} imgPath="" />
        <Text style={styles.text}>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 90,
    height: 120,

    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "black",
    borderRadius: 8,
    marginLeft: 8,
    marginTop: 16,
  },
  text: {
    color: THEME.WHITE_COLOR,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
