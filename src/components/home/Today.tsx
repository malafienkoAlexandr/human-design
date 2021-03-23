import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Single } from "Single";
import { NotifyButton } from "../buttons/NotifyButton";

type Props = {
  item: Single;
  isOnNotify: boolean;
};

export const Today = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Сегодня</Text>
        <NotifyButton title="Уведомления" enabled={false} />
      </View>
      <Text style={styles.description}>{props.item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topView: {
    flexDirection: "column",
  },
  title: {
    flex: 1,
  },
  description: {},
});
