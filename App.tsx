const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GuestFlow01 from "./screens/GuestFlow01";
import LogIn01 from "./screens/LogIn01";
import GuestFlow4 from "./screens/GuestFlow4";
import GuestFlow3 from "./screens/GuestFlow3";
import GuestFlow2 from "./screens/GuestFlow2";
import GoogleModal from "./screens/GoogleModal";
import GoogleModal1 from "./screens/GoogleModal1";
import SignUpSocial01 from "./screens/SignUpSocial01";
import SignUpSocial7 from "./screens/SignUpSocial7";
import SignUpSocial6 from "./screens/SignUpSocial6";
import SignUp05 from "./screens/SignUp05";
import SignUp7 from "./screens/SignUp7";
import SignUp6 from "./screens/SignUp6";
import SignUp02 from "./screens/SignUp02";
import SignUp01 from "./screens/SignUp01";
import LandingPage from "./screens/LandingPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "SF Pro Text_semibold": require("./assets/fonts/SF_Pro_Text_semibold.ttf"),
    Manrope_regular: require("./assets/fonts/Manrope_regular.ttf"),
    Manrope_bold: require("./assets/fonts/Manrope_bold.ttf"),
    Manrope_extrabold: require("./assets/fonts/Manrope_extrabold.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="GuestFlow01"
              component={GuestFlow01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn01"
              component={LogIn01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GuestFlow4"
              component={GuestFlow4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GuestFlow3"
              component={GuestFlow3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GuestFlow2"
              component={GuestFlow2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoogleModal"
              component={GoogleModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoogleModal1"
              component={GoogleModal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpSocial01"
              component={SignUpSocial01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpSocial7"
              component={SignUpSocial7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpSocial6"
              component={SignUpSocial6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp05"
              component={SignUp05}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp7"
              component={SignUp7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp6"
              component={SignUp6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp02"
              component={SignUp02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp01"
              component={SignUp01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
