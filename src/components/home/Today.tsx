import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Single } from "Single";
import { NotifyButton } from "../buttons/NotifyButton";

type Props = {
  item: Single;
  isOnNotify: boolean;
  onPress: () => void;
};

export const Today = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Сегодня</Text>
        <NotifyButton
          title="Уведомления"
          enabled={false}
          onPress={props.onPress}
        />
      </View>
      <Text style={styles.description}>{props.item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 26,
  },
  topView: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 26,
  },
  title: {
    fontSize: 32,
    marginRight: 26,
    flex: 1,
  },
  description: {
    paddingTop: 26,
  },
});
