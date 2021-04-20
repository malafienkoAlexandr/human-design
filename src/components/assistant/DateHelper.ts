import React from "react-native";

export const newDate = (str?: string) => {
  console.log("Date = ", str!);
  if (str !== undefined) {
    let date = new Date(str!);
    console.log("!!!", date);
    return date;
  } else {
    return new Date();
  }
};
