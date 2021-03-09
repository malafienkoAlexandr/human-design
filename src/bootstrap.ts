import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "sf-black": require("../assets/fonts/SFUIDisplay-Black.ttf"),
    "sf-bold": require("../assets/fonts/SFUIDisplay-Bold.ttf"),
    "sf-heavy": require("../assets/fonts/SFUIDisplay-Heavy.ttf"),
    "sf-light": require("../assets/fonts/SFUIDisplay-Light.ttf"),
    "sf-medium": require("../assets/fonts/SFUIDisplay-Medium.ttf"),
    "sf-regular": require("../assets/fonts/SFUIDisplay-Regular.ttf"),
    "sf-semibold": require("../assets/fonts/SFUIDisplay-Semibold.ttf"),
    "sf-thin": require("../assets/fonts/SFUIDisplay-Thin.ttf"),
    "sf-ultralight": require("../assets/fonts/SFUIDisplay-Ultralight.ttf"),
  });
}
