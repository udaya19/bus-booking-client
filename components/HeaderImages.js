import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";

const HeaderImages = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/vizag.jpeg")} style={styles.image} />
        <Image source={require("../assets/vizag.jpeg")} style={styles.image} />
        <Image source={require("../assets/vizag.jpeg")} style={styles.image} />
        <Image source={require("../assets/vizag.jpeg")} style={styles.image} />
      </View>
    </ScrollView>
  );
};

export default HeaderImages;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: "150%",
    borderRadius: 10,
  },
});
