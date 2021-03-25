import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Transit } from "Transit";
import { BodygraphButton } from "../buttons/BodygraphButton";

type Props = {
  items: Transit[];
  onPress: () => void;
};

export const TransitList = (props: Props) => {
  const renderItem = (item: Transit) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <BodygraphButton title="Подробнее" onPress={props.onPress} />
      </View>
    );
  };
  return (
    <FlatList
      scrollEnabled={false}
      data={props.items}
      renderItem={(item) => renderItem(item.item)}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 142,
    marginLeft: 26,
    marginRight: 26,
    marginBottom: 26,
    borderRadius: 8,
    backgroundColor: "#f9c2ff",
    flexDirection: "column",
  },
  title: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    paddingLeft: 16,
    paddingTop: 8,
    paddingRight: 16,
    fontSize: 15,
    color: "white",
  },
});
