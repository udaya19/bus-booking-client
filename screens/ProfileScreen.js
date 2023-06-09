import { StyleSheet, Text, View } from "react-native";
import React from "react";

import useAuth from "../context/useAuth";

const ProfileScreen = () => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Text onPress={handleLogOut}>logout</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
