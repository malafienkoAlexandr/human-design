// import React from "react";
// import View from "react-native";

// export const HomeHeader = () => {

// };

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { User } from "UserModule";
import Svg, { Ellipse } from "react-native-svg";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { THEME } from "../../theme";
// import MaterialButtonLight from "./components/MaterialButtonLight";

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.ellipseRow}>
          <Svg viewBox="0 0 31.7 31.7" style={styles.ellipse}>
            <Ellipse
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={16}
              cy={16}
              rx={16}
              ry={16}
            ></Ellipse>
          </Svg>
          <Text style={styles.title}>Alexandr</Text>
          {/* <Icon name="settings" style={styles.icon}></Icon> */}
        </View>
        <Text style={styles.text}>
          Ты, Манифестирующий генератор, профиль 4/1 оппортунист исследователь
        </Text>
        {/* <MaterialButtonLight
          style={styles.materialButtonLight}
        ></MaterialButtonLight> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
  },
  rect: {
    width: "100%",
    height: 300,
    backgroundColor: THEME.BLACK_COLOR_APP,
  },
  ellipse: {
    width: 32,
    height: 32,
  },
  title: {
    fontFamily: "sf-regular",
    color: "white",
    fontSize: 24,
    marginLeft: 16,
    marginTop: 2,
  },
  icon: {
    color: THEME.BLACK_COLOR_APP,
    fontSize: 24,
    height: 0,
    width: 0,
    marginLeft: 271,
    marginTop: 3,
  },
  ellipseRow: {
    height: 32,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 16,
    marginRight: 40,
  },
  text: {
    fontFamily: "sf-regular",
    color: "white",
    fontSize: 13,
    width: 256,
    height: 15,
    marginLeft: 64,
    flex: 1,
  },
  materialButtonLight: {
    height: 25,
    width: 144,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12,
    marginTop: 27,
    marginLeft: 64,
  },
});
