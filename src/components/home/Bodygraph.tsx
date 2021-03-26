import React from "react";
import { ScrollView, StyleSheet, View, Animated } from "react-native";
import { THEME } from "../../theme";
import { BodygraphButton } from "../buttons/BodygraphButton";

type Props = {
  title: string;
  onPress: () => void;
};

export const Bodygraph = (props: Props) => {
  return (
    <View style={styles.container}>
      <BodygraphButton
        style={{ marginLeft: 64 }}
        title={"Твой бодиграф"}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: THEME.BLACK_COLOR_APP,
  },
});
