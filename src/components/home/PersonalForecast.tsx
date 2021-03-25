import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { PersonalForecast } from "PersonalForecast";
import { UserLogo } from "../UserLogo";
import { ForecastItem } from "./ForecastItem";

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
          <View style={{ marginLeft: 16, marginRight: 16 }}>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Персональный прогноз
            </Text>
            <Text style={{ fontSize: 13 }}>Проектор, 10 июля</Text>
          </View>
        </View>
        <ScrollView style={styles.scroll} horizontal={true}>
          <FlatList
            data={props.items}
            renderItem={(item) => (
              <ForecastItem item={item.item} onPress={props.onPress} />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  personalContent: {
    width: "100%",
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
    margin: 0,
    padding: 16,
    width: "100%",
  },
});
