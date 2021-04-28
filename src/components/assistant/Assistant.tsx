import React, { createRef, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "navigation-types";

// @ts-ignore
import { Pages } from "react-native-pages";
import { AssistantPageType } from "../../enums";
import { Name } from "./Name";
import { Time } from "./Time";
import { Date } from "./Date";
import { BirthPlace } from "./BirthPlace";
import { newDate } from "./DateHelper";
import { User } from "UserModule";

type AssistantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Assistant"
>;

type Props = {
  user?: User;
  currentPage: number;
  pages: AssistantPageType[];
  navigation: AssistantScreenNavigationProp;
};

export const AssistantPages = (props: Props) => {
  const pageRef = createRef<Pages>();

  useEffect(() => {
    if (pageRef !== null) {
      pageRef.current.isDragging(false);
      pageRef.current.scrollToPage(props.currentPage);
    }
  });

  const openPlacestHandler = () => {
    props.navigation.navigate("Places");
  };

  const renderPages = () => {
    return props.pages.map((type) => {
      switch (type) {
        case AssistantPageType.name:
          return <Name name={props.user?.name ?? ""} key={"name"} />;
        case AssistantPageType.birthPlace:
          return (
            <BirthPlace
              key={"birthPlace"}
              place={props.user?.birthPlce ?? ""}
              onPress={openPlacestHandler}
            />
          );
        case AssistantPageType.birthDate:
          return (
            <Date
              key={"date"}
              date={newDate(props.user?.birthDate)}
              onChangeTime={(time) => console.log(time)}
            />
          );
        case AssistantPageType.birthTime:
          return <Time time={newDate(props.user?.birthTime)} key={"time"} />;
      }
    });
  };
  console.log(props.currentPage);
  return (
    <View style={styles.container}>
      <Pages ref={pageRef} startPage={props.currentPage} scrollEnabled={false}>
        {renderPages()}
      </Pages>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
