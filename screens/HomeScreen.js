import React from "react";
import { StyleSheet, Text, View } from "react-native";

import useAuth from "../context/useAuth";

const HomeScreen = () => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View>
      <Text onPress={handleLogOut}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
