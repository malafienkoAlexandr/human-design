import React, { useState } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import store from "./src/store/index";
import { bootstrap } from "./src/bootstrap";
import { AppNavigator } from "./src/navigation/AppNavigation";
import { NativeModules, Platform } from "react-native";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import homeEn from "./src/i18n/en/home.json";
import homeRu from "./src/i18n/ru/home.json";

const { RNI18n } = NativeModules;

const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

const resources = {
  en: {
    home: homeEn,
  },
  ru: {
    home: homeRu,
  },
};

console.log(locale);

i18next.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: false,
  resources: resources,
});

export default function App() {
  const [isRedy, setIsRedy] = useState(false);

  if (!isRedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsRedy(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
