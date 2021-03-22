import React from "react";
import { FlatList, Text } from "react-native";
import { Home } from "Home";
import { Transit } from "Transit";
import { PersonalForecast } from "PersonalForecast";
import { User } from "UserModule";

const transitData: Transit[] = [
  {
    id: "0",
    title: "transit",
    description: "description",
  },
];

const personalForecastData: PersonalForecast[] = [
  {
    id: "",
    type: PersonalForecastType.general,
    text: "",
  },
];

const friendsData: User[] = [];

const DATA: Home = {
  today: {
    title: "",
    description: "",
  },
  transit: transitData,
  personalForecast: personalForecastData,
  friends: [{}],
};

// export const HomeList = () => {
//   return (
//     <FlatList
//       data={{ name: string }}
//       renderItem={(item) => {
//         return <Text>Hello</Text>;
//       }}
//       keyExtractor={(item) => item.name + item}
//     />
//   );
// };
