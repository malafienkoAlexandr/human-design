import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Animated, Image } from "react-native";

import { AssistantPages } from "../../components/assistant/Assistant";
import { Footer } from "../../components/assistant/Footer";
import { Header } from "../../components/assistant/Header";
import { AssistantPageType } from "../../enums";

export const AssistantScreen = ({}) => {
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
    <View style={{ width: "100%", height: "100%" }}>
      <Image
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: "100%",
        }}
        source={require("../../../assets/assistanceBackground.png")}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <Header
          type={pages[currentPage - 1]}
          currentPage={currentPage}
          pagesCount={pages.length}
          backAction={backHandler}
        />
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <AssistantPages pages={pages} currentPage={currentPage} />
          <Footer nextAction={nextHandler} />
        </View>
      </View>
    </View>
  );
};
