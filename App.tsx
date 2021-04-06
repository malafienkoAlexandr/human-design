import React, { useState } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import store from "./src/store/index";
import { bootstrap } from "./src/bootstrap";
import { AppNavigator } from "./src/navigation/AppNavigation";
import {
  NativeModules,
  Platform,
  StatusBar,
  View,
  StyleSheet,
} from "react-native";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { THEME } from "./src/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";
import KeyboardManager from "react-native-keyboard-manager";

const { RNI18n } = NativeModules;

const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "ru",
  debug: false,
  react: {
    wait: true,
  },
  resources: {
    ru: { translation: require("./src/i18n/ru/home.json") },
    en: { translation: require("./src/i18n/en/home.json") },
  },
});

if (Platform.OS === "ios") {
  KeyboardManager.setEnable(true);
}

export default function App() {
  const [isRedy, setIsRedy] = useState(false);

  const { t } = useTranslation();

  if (!isRedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsRedy(true)}
        onError={(error) => console.log("")}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />
      </View>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  StatusBar: {
    height: getStatusBarHeight(),
    backgroundColor: THEME.BLACK_COLOR_APP,
  },
});
