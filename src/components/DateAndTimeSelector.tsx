import React from "react";
import { Platform, NativeModules, StyleSheet, View } from "react-native";
import DatePicker from "react-native-date-picker";

type Mode = "date" | "time" | "datetime" | undefined;

const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

type Props = {
  date: Date;
  mode: Mode;
  onDateChange: () => Date;
};

export const AssistantPages = (props: Props) => {
  return (
    <View style={styles.container}>
      <DatePicker
        date={props.date}
        mode={props.mode}
        locale={locale}
        onDateChange={props.onDateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  pageContainer: {},
});
