import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { InputText } from "../InputText";
import { Title } from "./Title";

type Props = {
  name: string;
};

export const Name = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_name_title")}
        description={t("assistant_name_description")}
      />
      <InputText
        value={props.name}
        placeholder={t("assistant_name_enter")}
        onChangeValue={(text) => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 47,
    flex: 1,
    justifyContent: "space-between",
  },
});
