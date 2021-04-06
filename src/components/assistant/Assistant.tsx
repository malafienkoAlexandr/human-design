import React from "react";
import { StyleSheet, View } from "react-native";
import { User } from "UserModule";
import { THEME } from "../../theme";
// @ts-ignore
import { Pages } from "react-native-pages";
import { AssistantPageType } from "../../enums";
import { Name } from "./Name";

type Props = {
  currentPage: number;
  pages: AssistantPageType[];
};

export const AssistantPages = (props: Props) => {
  const renderPages = () => {
    return props.pages.map((type) => {
      switch (type) {
        case AssistantPageType.name:
          return <Name />;
        case AssistantPageType.birthPlace:
          return (
            <View key={type} style={{ flex: 1, backgroundColor: "red" }}></View>
          );
        case AssistantPageType.birthDate:
          return <View key={type} style={{ flex: 1 }}></View>;
        case AssistantPageType.birthTime:
          return <View key={type} style={{ flex: 1 }}></View>;
      }
    });
  };
  return (
    <View style={styles.container}>
      <Pages>{renderPages()}</Pages>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
