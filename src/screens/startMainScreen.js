import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startMainScreen = () => {
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
};

export default startMainScreen;
