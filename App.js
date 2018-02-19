import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Main from "./src/screens/Main/Main";
import configureStore from "./src/store/configStore";

const store = configureStore();

//Registe Main Screen
Navigation.registerComponent(
  "v2ex-react-native.MainScreen",
  () => Main,
  store,
  Provider
);
Navigation.startSingleScreenApp({
  screen: {
    screen: "v2ex-react-native.MainScreen",
    title: "V2EX"
  }
});
