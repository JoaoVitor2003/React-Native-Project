import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePag from "../../components/Home";
import Login from "../../components/Login";
import Agendamento from "../../components/Agendamento"; //

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="HomePag"
    >
    <Stack.Screen name="HomePag" component={HomePag} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
    <Stack.Screen name="Agendamento" component={Agendamento}/>
   </Stack.Navigator> 
   );
}