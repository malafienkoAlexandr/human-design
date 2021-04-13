import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { searchPlace } from "../../../services/search-place-service";
import { RootStackParamList } from "navigation-types";
import Geocoder from "@timwangdev/react-native-geocoder";

type PlacesScreenRouteProp = RouteProp<RootStackParamList, "Places">;

type AssistantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Places"
>;

type Props = {
  router: PlacesScreenRouteProp;
  navigation: AssistantScreenNavigationProp;
};

const searchPlaces = async () => {
  try {
    let result = await Geocoder.geocodeAddress("Моск", {
      locale: "ru",
      fallbackToGoogle: false,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const SearchPlaces = (props: Props) => {
  const { t } = useTranslation();

  searchPlaces();

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});
