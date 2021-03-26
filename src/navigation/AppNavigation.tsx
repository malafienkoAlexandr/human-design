import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { THEME } from "../theme";

const Stack = createStackNavigator();

const navigatorOptions = {
  default: {
    headerStyle: {
      backgroundColor: THEME.BLACK_COLOR_APP,
    },
    headerTintColor: "#fff",
  },
  hide: {
    headerShown: false,
  },
};

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Главная"
        component={HomeScreen}
        options={navigatorOptions.hide}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
