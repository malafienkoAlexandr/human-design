import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { PersonalForecast } from "PersonalForecast";
import { UserLogo } from "../UserLogo";
import { ForecastItem } from "./ForecastItem";
import { THEME } from "../../theme";

type Props = {
  items: PersonalForecast[];
  onPress: () => void;
};

export const PersonalForecastList = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.personalHeader}>
        <UserLogo imgPath="" onPress={() => console.log("press")} />
        <View style={styles.personalChildContent}>
          <Text style={styles.title}>Персональный прогноз</Text>
          <Text style={styles.description}>Проектор, 10 июля</Text>
        </View>
      </View>
      <View style={styles.personalContent}>
        <View style={styles.main}></View>
        <FlatList
          style={styles.list}
          horizontal
          contentContainerStyle={{ paddingLeft: 34, paddingRight: 34 }}
          data={props.items}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (
            <ForecastItem item={item.item} onPress={props.onPress} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingBottom: 16,
    backgroundColor: THEME.GREY_COLOR_40,
  },
  personalContent: {
    width: "100%",
    height: 150,
    backgroundColor: "transparent",
  },
  personalHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 24,
    marginLeft: 26,
    marginRight: 26,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: THEME.WHITE_COLOR,
  },
  main: {
    height: 134,
    marginTop: 0,
    marginLeft: 26,
    marginRight: 26,
    backgroundColor: THEME.WHITE_COLOR,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  list: {
    height: 156,
    flex: 1,
    position: "absolute",
  },
  personalChildContent: {
    width: "100%",
    padding: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  description: {
    fontSize: 13,
    color: THEME.GREY_COLOR_60,
  },
});
