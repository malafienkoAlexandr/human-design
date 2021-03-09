import React, { useState } from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import store from "./src/store/index";
import { bootstrap } from "./src/bootstrap";
import { AppNavigator } from "./src/navigation/AppNavigation";

export default function App() {
  const [isRedy, setIsRedy] = useState(false);

  if (!isRedy) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsRedy(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
