import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme";
import AddFriendIcon from "../../../assets/AddFriendIcon.svg";

type Props = {
  style?: ViewStyle;
  onPress(): void;
};

export const AddFriendsButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, ...props.style }}>
        <AddFriendIcon />
        <Text style={styles.text}>Добавить друга</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 120,
    alignSelf: "flex-start",
    alignItems: "center",

    backgroundColor: THEME.BLACK_COLOR_APP,
    borderRadius: 8,
    justifyContent: "flex-end",
    marginTop: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    color: THEME.WHITE_COLOR,
    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 16,
  },
});
