import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import Main from "./src/screens/Main/Main";
import Reply from "./src/screens/Reply/Reply";
import NormalReply from "./src/screens/NormalReply/NormalReply";
import TopicsList from "./src/components/TopicsList/TopicsList";
import configureStore from "./src/store/configStore";

const store = configureStore();

//Regist Main Screen
Navigation.registerComponent(
  "v2ex-react-native.MainScreen",
  () => Main,
  store,
  Provider
);
//Regist Reply Screen
Navigation.registerComponent(
  "v2ex-react-native.ReplyScreen",
  () => Reply,
  store,
  Provider
);

//Regist Normal Reply Screen
Navigation.registerComponent(
  "v2ex-react-native.NormalReplyScreen",
  () => NormalReply,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "v2ex-react-native.MainScreen",
    title: "V2EX"
  }
});
