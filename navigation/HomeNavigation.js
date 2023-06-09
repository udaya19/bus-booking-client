import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BusSearchScreen from "../screens/BusSearchScreen";
import ListOfBusesScreen from "../screens/ListOfBusesScreen";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="search"
          component={BusSearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="busesList"
          component={ListOfBusesScreen}
          options={{
            title: "Time Table",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigation;
