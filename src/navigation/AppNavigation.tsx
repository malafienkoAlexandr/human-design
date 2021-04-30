import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import AssistantScreen from "../screens/assistant/AssistantScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { THEME } from "../theme";
import { SearchPlaces } from "../screens/places/Places";

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

const Home = () => {
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={navigatorOptions.hide}
  />;
};

const AssistantNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Assistant"
      mode="modal"
      headerMode="none"
    >
      <Stack.Screen
        name="Assistant"
        component={AssistantScreen}
        options={navigatorOptions.hide}
      />
      <Stack.Screen name="Places" component={SearchPlaces} options={{}} />
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AssistantNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
