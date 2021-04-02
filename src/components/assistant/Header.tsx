import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import BackIcon from "../../../assets/backArrow.svg";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { THEME } from "../../theme";
import NameIcon from "../../../assets/assistantNameIcon.svg";
import PlaceIcon from "../../../assets/assistantLocationIcon.svg";
import TimeIcon from "../../../assets/assistantTimeIcon.svg";
import DateIcon from "../../../assets/assistantDateIcon.svg";
import { AssistantPageType } from "../../enums";

type Props = {
  type: AssistantPageType;
  pagesCount: number;
  currentPage: number;
  backAction: () => void;
};

export const Header = (props: Props) => {
  const [fill, fillChange] = useState(0);
  const [backHide, setbackHide] = useState(false);

  useEffect(() => {
    const currentFill: number = props.currentPage * (100 / props.pagesCount);
    fillChange(currentFill);
    setbackHide(props.currentPage <= 1 ? true : false);
  });

  const renderIcons = () => {
    switch (props.type) {
      case AssistantPageType.name: {
        return <NameIcon />;
      }
      case AssistantPageType.birthPlace: {
        return <PlaceIcon />;
      }
      case AssistantPageType.birthTime: {
        return <TimeIcon />;
      }
      case AssistantPageType.birthDate: {
        return <DateIcon />;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {backHide ? null : (
          <TouchableOpacity onPress={props.backAction}>
            <BackIcon />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.main}>
        <AnimatedCircularProgress
          size={140}
          width={20}
          fill={fill}
          tintColor={THEME.WHITE_COLOR}
          rotation={360}
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor={THEME.GREY_COLOR_80_A}
        />
        <View style={styles.image}>{renderIcons()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 145,
    width: "100%",
  },
  top: {
    flexDirection: "row",
    padding: 16,
    height: 44,
  },
  main: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
