import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default ProfileNavigation;
