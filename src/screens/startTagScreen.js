import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTagScreen = () => {
  Promise.all([Icon.getImageSource("md-menu", 30)]).then(resource => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "v2ex-react-native.TagListScreen",
        title: "节点列表",
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
};

export default startTagScreen;
