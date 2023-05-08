import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePag from "../../components/Home";
import Login from "../../components/Login";
import Agendamento from "../../components/Agendamento";
import Cadastro from "../../components/Cadastro"; //

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="HomePag"
    >
    <Stack.Screen name="HomePag" component={HomePag} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
    <Stack.Screen name="Agendamento" component={Agendamento}/>
    <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
   </Stack.Navigator> 
   );
}