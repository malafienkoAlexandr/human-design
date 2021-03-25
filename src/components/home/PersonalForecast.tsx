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
  const renderItem = (item: PersonalForecast) => {
    return (
      <View style={{}}>
        <View style={{}}></View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.personalContent}>
          <UserLogo imgPath="" onPress={() => console.log("press")} />
          <View style={styles.personalChildContent}>
            <Text style={styles.title}>Персональный прогноз</Text>
            <Text style={styles.description}>Проектор, 10 июля</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.list}
        horizontal
        contentContainerStyle={{ paddingLeft: 36 }}
        data={props.items}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <ForecastItem item={item.item} onPress={props.onPress} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F7F7F7",
  },
  personalContent: {
    width: "100%",
    height: 220,
    flexDirection: "row",
    padding: 16,
  },
  childContainer: {
    flex: 1,
    marginBottom: 24,
    marginTop: 24,
    marginLeft: 26,
    marginRight: 26,
    borderRadius: 8,
    backgroundColor: "white",
  },
  scroll: {
    padding: 16,
    width: "100%",
  },
  list: {
    height: 120,
    position: "absolute",
  },
  personalChildContent: {
    marginLeft: 16,
    padding: 16,
    marginRight: 16,
    backgroundColor: "transparent",
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
