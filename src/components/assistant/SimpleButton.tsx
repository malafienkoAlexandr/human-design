import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { THEME } from "../../theme";

type Props = {
  title: string;
  onPress: () => void;
};

export const SimpleButton = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 15,
    color: THEME.WHITE_COLOR,
  },
});
