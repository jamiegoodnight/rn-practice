import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListsScreen from "./src/screens/ListsScreen";
import Image from "./src/screens/Image";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorGeneratorScreen from "./src/screens/ColorGeneratorScreen";
import CGSWithReducer from "./src/screens/CGSWithReducer";
import InputTest from "./src/screens/InputTest";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListsScreen,
    Image: Image,
    Counter: CounterScreen,
    Colors: ColorScreen,
    // Generator: ColorGeneratorScreen
    Generator: CGSWithReducer,
    Input: InputTest,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
