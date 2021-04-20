import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "./Title";
import { newDate } from "../../components/assistant/DateHelper";
import { DateSelector } from "../DateSelector";

type Props = {
  date: Date;
  onChangeTime: (date: Date) => void;
};

export const Date = (props: Props) => {
  const { t } = useTranslation();

  const [date, setDate] = useState(props.date);

  useEffect(() => {
    props.onChangeTime(date);
  });

  return (
    <View style={styles.container}>
      <Title
        title={t("assistant_date_birth_title")}
        description={t("assistant_date_birth_description", { value: "Иван" })}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <DateSelector
          date={newDate("1978-01-01")}
          maxDate={newDate()}
          minDate={newDate("1890-01-01")}
          mode={"date"}
          onDateChange={setDate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
