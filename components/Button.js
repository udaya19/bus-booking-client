import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const ButtonComponent = ({ title, onSubmit }) => {
  return (
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "#ea2527",
    width: 120,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
