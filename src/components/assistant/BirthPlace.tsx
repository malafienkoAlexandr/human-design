import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { InputText } from "../InputText";
import { PlaceInput } from "./PlaceInput";
import { Title } from "./Title";

type Props = {
  place: string;
  onPress: () => void;
};

export const BirthPlace = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_place_birth_title")}
        description={t("assistant_time_birth_description")}
      />
      <PlaceInput title={props.place} onPress={props.onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 86,
    flex: 1,
    justifyContent: "space-between",
  },
});
