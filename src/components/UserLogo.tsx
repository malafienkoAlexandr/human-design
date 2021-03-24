import React from "react";
import Svg, { Ellipse } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  imgPath: string;
  onPress: () => void;
};

export const UserLogo = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Svg viewBox="0 0 32 32" style={styles.ellipse}>
        <Ellipse
          strokeWidth={0}
          fill="yellow"
          cx={16}
          cy={16}
          rx={16}
          ry={16}
        ></Ellipse>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ellipse: {
    width: 32,
    height: 32,
  },
});
