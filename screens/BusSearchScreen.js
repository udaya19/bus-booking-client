import React from "react";
import { StyleSheet, Image, View, ScrollView, Text } from "react-native";

import useAuth from "../context/useAuth";

const BusSearchScreen = ({ navigation }) => {
  const { logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/vizag.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/vizag.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/vizag.jpeg")}
            style={styles.image}
          />
          <Image
            source={require("../assets/vizag.jpeg")}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BusSearchScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
  },
  image: {
    height: 300,
    width: "150%",
    borderRadius: 10,
  },
});
