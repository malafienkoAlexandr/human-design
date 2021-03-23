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
    margin: 16,
  },
  topView: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    backgroundColor: "yellow",
    marginRight: 16,
    flex: 1,
  },
  description: {
    paddingTop: 16,
  },
});
