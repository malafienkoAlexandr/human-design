import React, { useEffect, useRef, useState } from "react";

import { View, Animated, Image, StyleSheet } from "react-native";

import { AssistantPages } from "../../components/assistant/Assistant";
import { Footer } from "../../components/assistant/Footer";
import { Header } from "../../components/assistant/Header";
import { AssistantPageType } from "../../enums";
import { RootStackParamList } from "navigation-types";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type AssistantScreenRouteProp = RouteProp<RootStackParamList, "Assistant">;

type AssistantScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Assistant"
>;

type Props = {
  router: AssistantScreenRouteProp;
  navigation: AssistantScreenNavigationProp;
};

export const AssistantScreen = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages: AssistantPageType[] = [
    AssistantPageType.name,
    AssistantPageType.birthPlace,
    AssistantPageType.birthTime,
    AssistantPageType.birthDate,
  ];

  const nextHandler = () => {
    if (currentPage <= pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const backHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.main}>
      <Image
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: "100%",
        }}
        source={require("../../../assets/assistanceBackground.png")}
      />
      <View style={styles.cantainer}>
        <Header
          type={pages[currentPage - 1]}
          currentPage={currentPage}
          pagesCount={pages.length}
          backAction={backHandler}
        />
        <View style={styles.bottom}>
          <AssistantPages
            navigation={props.navigation}
            pages={pages}
            currentPage={currentPage - 1}
          />
          <Footer nextAction={nextHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  cantainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  bottom: {
    flex: 1,
  },
});
