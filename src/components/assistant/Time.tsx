import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "./Title";

type Props = {};

export const Time = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_time_birth_title")}
        description={t("assistant_time_birth_description")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 86,
    flex: 1,
    justifyContent: "space-between",
  },
});
