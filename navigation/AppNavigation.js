import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeNavigation from "./HomeNavigation";

import color from "../data/color";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: color.tabColor,
          tabBarActiveTintColor: color.primaryRed,
        }}
      >
        <Tab.Screen
          name="Search"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="select-search"
                size={25}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigation;
