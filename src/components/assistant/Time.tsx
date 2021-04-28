import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { DateSelector } from "../DateSelector";
import { newDate } from "./DateHelper";
import { SimpleButton } from "./SimpleButton";
import { Title } from "./Title";

type Props = {
  time: Date;
};

export const Time = (props: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_time_birth_title")}
        description={t("assistant_time_birth_description")}
      />
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <DateSelector
          date={props.time}
          mode={"time"}
          onDateChange={(time) => console.log(time)}
        />
        <SimpleButton title={t("know")} onPress={() => console.log("press")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
