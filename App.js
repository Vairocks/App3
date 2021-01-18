import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./Screens/FirstScreen";
import CountryInfo from "./Screens/CountryInfo";
import CapitalInfo from "./Screens/CapitalInfo";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="firstScreen" component={FirstScreen} />
          <Stack.Screen name="CountryInfo" component={CountryInfo} />
          <Stack.Screen name="CapitalInfo" component={CapitalInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
