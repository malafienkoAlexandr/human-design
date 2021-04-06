import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { THEME } from "../theme";
import KeyboardManager from "react-native-keyboard-manager";

type Props = {
  value: string;
  placeholder: string;
  onChangeValue: (text: string) => void;
};

export const InputText = (props: Props) => {
  const [text, onChangeText] = useState(props.value);

  useEffect(() => {
    props.onChangeValue(text);
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        placeholderTextColor={THEME.WHITE_COLOR_60}
        selectionColor={THEME.WHITE_COLOR}
        keyboardType="default"
        onLayout={() => {
          // When the input size (textarea) changes, it updates the keyboard position.;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
  },
  input: {
    color: THEME.WHITE_COLOR,
    height: 44,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: THEME.WHITE_COLOR_60,
    textAlign: "center",
  },
});
