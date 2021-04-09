import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "./Title";

type Props = {};

export const Date = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_date_birth_title")}
        description={t("assistant_date_birth_description", { value: "Иван" })}
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
