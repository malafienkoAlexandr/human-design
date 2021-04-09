import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Geocoder from "@timwangdev/react-native-geocoder";
import { search } from "../../../services/search-place-service";
import { RootStackParamList } from "navigation-types";

type PlacesScreenRouteProp = RouteProp<RootStackParamList, "Places">;

type AssistantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Places"
>;

type Props = {
  router: PlacesScreenRouteProp;
  navigation: AssistantScreenNavigationProp;
};

export const SearchPlaces = (props: Props) => {
  const { t } = useTranslation();
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});
