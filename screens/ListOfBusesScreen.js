import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ListOfBusesScreen = ({ route }) => {
  const [buses, setBuses] = useState([]);
  const { result } = route.params;
  useEffect(() => {
    console.log("Buses List screen:", result);
    setBuses(result);
  }, []);
  return (
    <View>
      <Text>ListOfBusesScreen</Text>
    </View>
  );
};

export default ListOfBusesScreen;

const styles = StyleSheet.create({});
