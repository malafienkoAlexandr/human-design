import React, { createRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Platform } from "react-native";
import { RouteProp } from "@react-navigation/native";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
  PlaceType,
} from "react-native-google-places-autocomplete";
import { StackNavigationProp } from "@react-navigation/stack";
import KeyboardManager from "react-native-keyboard-manager";
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
  const ref = createRef<GooglePlacesAutocompleteRef>();

  const enableKeyboardManager = (value: boolean) => {
    if (Platform.OS === "ios") {
      KeyboardManager.setEnable(value);
    }
  };

  if (Platform.OS === "ios") {
    KeyboardManager.setEnable(false);
  }

  useEffect(() => {
    enableKeyboardManager(false);
    ref.current?.focus();
  }, []);

  const types: PlaceType[] = ["locality"];
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.rect}></View>
      </View>

      <GooglePlacesAutocomplete
        ref={ref}
        placeholder={t("assistant.search_placeholder")}
        enablePoweredByContainer={false}
        fetchDetails={true}
        filterReverseGeocodingByTypes={types}
        onPress={(data, details = null) => {
          console.log("Details", data, details);
          props.navigation.goBack();
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
