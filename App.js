import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import Main from "./src/screens/Main/Main";
import Reply from "./src/screens/Reply/Reply";
import NormalReply from "./src/screens/NormalReply/NormalReply";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import TagList from "./src/screens/TagList/TagList";
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

//Regist Tag List Screen
Navigation.registerComponent(
  "v2ex-react-native.TagListScreen",
  () => TagList,
  store,
  Provider
);

Navigation.registerComponent("v2ex-react-native.SideDrawer", () => SideDrawer);

Promise.all([Icon.getImageSource("md-menu", 30)]).then(resource => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "v2ex-react-native.MainScreen",
      title: "V2EX",
      navigatorButtons: {
        leftButtons: [
          {
            icon: resource[0],
            title: "Menu",
            id: "sideDrawerToggle"
          }
        ]
      }
    },
    drawer: {
      left: {
        screen: "v2ex-react-native.SideDrawer"
      }
    }
  });
});
