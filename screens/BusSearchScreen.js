import React from "react";
import { StyleSheet, Text, View } from "react-native";

import useAuth from "../context/useAuth";

const BusSearchScreen = ({ navigation }) => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View>
      <Text onPress={handleLogOut}>BusSearchScreen</Text>
      <Text onPress={() => navigation.navigate("busesList")}>Search</Text>
    </View>
  );
};

export default BusSearchScreen;

const styles = StyleSheet.create({});
