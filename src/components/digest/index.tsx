import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Digest } from "Digest";

import { DigestItem } from "./DigestItem";
import { THEME } from "../../theme";
import { useTranslation } from "react-i18next";

type Props = {
  items: Digest[];
  onPress: () => void;
};

export const DigestComponent = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Дайджест</Text>
      <FlatList
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
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
    // marginTop: 16,
    paddingTop: 16,
    width: "100%",
    flexDirection: "column",
    backgroundColor: THEME.BLACK_COLOR_APP,
  },
  title: {
    paddingLeft: 26,
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
});
