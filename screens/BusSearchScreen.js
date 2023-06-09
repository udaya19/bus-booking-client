import React from "react";
import { StyleSheet, View } from "react-native";

import useAuth from "../context/useAuth";

import HeaderImages from "../components/HeaderImages";

const BusSearchScreen = ({ navigation }) => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View>
      <HeaderImages />
    </View>
  );
};

export default BusSearchScreen;

const styles = StyleSheet.create({});
