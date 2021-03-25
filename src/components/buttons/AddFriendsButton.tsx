import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { THEME } from "../../theme";

type Props = {
  style?: ViewStyle;
  onPress(): void;
};

export const AddFriendsButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, ...props.style }}>
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
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 16,
    marginLeft: 16,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: THEME.WHITE_COLOR,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
