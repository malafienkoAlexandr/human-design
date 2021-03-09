import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/home/HomeScreen";
import { THEME } from "../theme";

const Stack = createStackNavigator();

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.BLACK_COLOR_APP,
    },
    headerTintColor: "#fff",
  },
};

const MainNavigator = () => {
  <Stack.Navigator>
    <Stack.Screen name="Главная" component={HomeScreen} />
  </Stack.Navigator>;
};

export const AppNavigator = () => {
  return <NavigationContainer>MainNavigator</NavigationContainer>;
};
