import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  enabled: boolean;
};

export const NotifyButton = (props: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 44,
  },
  title: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
