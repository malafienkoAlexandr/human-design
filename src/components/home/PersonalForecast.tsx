import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { PersonalForecast } from "PersonalForecast";
import { UserLogo } from "../UserLogo";

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
            <Text style={{ fontSize: 15 }}>Персональный прогноз</Text>
            <Text style={{ fontSize: 13 }}>Проектор, 10 июля</Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <FlatList
            data={props.items}
            renderItem={(item) => renderItem(item.item)}
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
    height: 240,
    backgroundColor: "#F7F7F7",
  },
  personalContent: {
    width: "100%",
    flexDirection: "row",
    padding: 16,
  },
  childContainer: {
    height: 214,
    flex: 1,
    marginBottom: 24,
    marginTop: 24,
    marginLeft: 26,
    marginRight: 26,
    borderRadius: 8,
    backgroundColor: "white",
  },

  //   topView: {
  //     alignItems: "center",
  //     flexDirection: "row",
  //     marginRight: 16,
  //   },
  //   title: {
  //     fontSize: 32,
  //     marginRight: 16,
  //     flex: 1,
  //   },
  //   description: {
  //     paddingTop: 16,
  //   },
});
