import React from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "navigation-types";

// @ts-ignore
import { Pages } from "react-native-pages";
import { AssistantPageType } from "../../enums";
import { Name } from "./Name";
import { Time } from "./Time";
import { Date } from "./Date";
import { BirthPlace } from "./BirthPlace";

type AssistantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Assistant"
>;

type Props = {
  currentPage: number;
  pages: AssistantPageType[];
  navigation: AssistantScreenNavigationProp;
};

export const AssistantPages = (props: Props) => {
  const openPlacestHandler = () => {
    props.navigation.navigate("Places");
  };

  const renderPages = () => {
    return props.pages.map((type) => {
      switch (type) {
        case AssistantPageType.name:
          return <Name />;
        case AssistantPageType.birthPlace:
          return <BirthPlace place={""} onPress={openPlacestHandler} />;
        case AssistantPageType.birthDate:
          return <Date />;
        case AssistantPageType.birthTime:
          return <Time />;
      }
    });
  };
  console.log(props.currentPage);
  return (
    <View style={styles.container}>
      <Pages scrollToPage={3}>{renderPages()}</Pages>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
