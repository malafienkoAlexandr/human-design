import { Platform } from "react-native";
import * as Font from "expo-font";

const loadSFFonts = async () => {
  await Font.loadAsync({
    "sf-black": require("../assets/fonts/SF/SFUIDisplay-Black.ttf"),
    "sf-bold": require("../assets/fonts/SF/SFUIDisplay-Bold.ttf"),
    "sf-heavy": require("../assets/fonts/SF/SFUIDisplay-Heavy.ttf"),
    "sf-light": require("../assets/fonts/SF/SFUIDisplay-Light.ttf"),
    "sf-medium": require("../assets/fonts/SF/SFUIDisplay-Medium.ttf"),
    "sf-regular": require("../assets/fonts/SF/SFUIDisplay-Regular.ttf"),
    "sf-semibold": require("../assets/fonts/SF/SFUIDisplay-Semibold.ttf"),
    "sf-thin": require("../assets/fonts/SF/SFUIDisplay-Thin.ttf"),
    "sf-ultralight": require("../assets/fonts/SF/SFUIDisplay-Ultralight.ttf"),
  });
};

const loadRobotoFonts = async () => {
  await Font.loadAsync({
    "roboto-black": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "roboto-light": require("../assets/fonts/Roboto/Roboto-Light.ttf"),
    "roboto-medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "roboto-regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "roboto-thin": require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
    "roboto-italic": require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
  });
};

export async function bootstrap() {
  await Font.loadAsync({
    "sf-black": require("../assets/fonts/SF/SFUIDisplay-Black.ttf"),
    "sf-bold": require("../assets/fonts/SF/SFUIDisplay-Bold.ttf"),
    "sf-heavy": require("../assets/fonts/SF/SFUIDisplay-Heavy.ttf"),
    "sf-light": require("../assets/fonts/SF/SFUIDisplay-Light.ttf"),
    "sf-medium": require("../assets/fonts/SF/SFUIDisplay-Medium.ttf"),
    "sf-regular": require("../assets/fonts/SF/SFUIDisplay-Regular.ttf"),
    "sf-semibold": require("../assets/fonts/SF/SFUIDisplay-Semibold.ttf"),
    "sf-thin": require("../assets/fonts/SF/SFUIDisplay-Thin.ttf"),
    "sf-ultralight": require("../assets/fonts/SF/SFUIDisplay-Ultralight.ttf"),
  });
}
