import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import {
  GooglePlacesAutocomplete,
  PlaceType,
} from "react-native-google-places-autocomplete";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "navigation-types";
import { THEME } from "../../theme";

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
  const types: PlaceType[] = [];
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rect}></View>
      </View>

      <GooglePlacesAutocomplete
        placeholder={t("assistant.search_placeholder")}
        enablePoweredByContainer={false}
        filterReverseGeocodingByTypes={types}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        styles={{
          container: {
            paddingLeft: 16,
            paddingRight: 16,
          },
          textInputContainer: {},
          textInput: {},
        }}
        query={{
          key: "AIzaSyBU6PHbZQCYipo1N4C84iab72G-UT1gu08",
          language: "ru",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: THEME.BLACK_COLOR_APP,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  rect: {
    backgroundColor: THEME.WHITE_COLOR,
    width: 40,
    height: 2,
  },
  container: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    width: "100%",
    height: "100%",
    backgroundColor: THEME.BLACK_COLOR_APP,
  },
});
