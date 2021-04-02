import React from "react";
import { StyleSheet, View } from "react-native";
import { User } from "UserModule";
import { THEME } from "../../theme";
// @ts-ignore
import { Pages } from "react-native-pages";
import { AssistantPageType } from "../../enums";

type Props = {
  currentPage: number;
  pages: AssistantPageType[];
};

export const AssistantPages = (props: Props) => {
  const renderPages = () => {
    return props.pages.map((type) => <View style={{ flex: 1 }}></View>);
  };
  return (
    <View style={styles.container}>
      <Pages containerStyle={styles.pageContainer}>{renderPages()}</Pages>
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
