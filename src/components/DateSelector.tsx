import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import DatePicker from "react-native-date-picker";
import { THEME } from "../theme";

type DateSelectorMode = "date" | "time" | "datetime";

type Props = {
  date: Date;
  mode: DateSelectorMode;
  maxDate?: Date;
  minDate?: Date;
  onDateChange: (date: Date) => void;
};

export const DateSelector = (props: Props) => {
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    props.onDateChange(date);
  });

  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        mode={props.mode}
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
        dividerHeight={50}
        onDateChange={setDate}
        textColor={THEME.WHITE_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
