import React from "react";
import { StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import AppNavigation from "./src/routes/routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <StatusBar backgroundColor={"#03a5fc"} barStyle="light"/>
      <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
