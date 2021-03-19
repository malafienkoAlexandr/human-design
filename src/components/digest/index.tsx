import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Digest } from "Digest";

import { DigestItem } from "./DigestItem";

type Props = {
  items: Digest[];
  onPress: () => void;
};

export const DigestComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Дайджест</Text>
      <FlatList
        horizontal
        data={props.items}
        renderItem={(item) => (
          <DigestItem title={item.item.title} onPress={props.onPress} />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
  },
  title: {
    paddingLeft: 16,
    color: "white",
    fontSize: 13,
  },
});
