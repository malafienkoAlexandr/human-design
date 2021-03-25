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
    flex: 1,
    marginTop: 16,
    marginLeft: 26,
    marginRight: 26,
    marginBottom: 16,
    // backgroundColor: "black",
  },
  topView: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginRight: 26,
    flex: 1,
  },
  description: {
    fontSize: 15,
    paddingTop: 16,
  },
});
