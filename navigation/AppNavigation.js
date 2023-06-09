import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Search" component={HomeNavigation} />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigation;
