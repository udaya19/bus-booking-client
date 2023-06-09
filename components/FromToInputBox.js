import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../data/color";

import TextInputComponent from "./TextInput";

const FromToInputBox = ({ iconName, placeholder, width, keyboardType }) => {
  return (
    <View style={styles.journeyFromTo}>
      <MaterialCommunityIcons
        name={iconName}
        size={20}
        color={color.tabColor}
        style={styles.icon}
      />
      <TextInputComponent
        placeholder={placeholder}
        width={width}
        paddingLeft={35}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FromToInputBox;

const styles = StyleSheet.create({
  journeyContainer: {},
  journeyFromTo: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  icon: {
    position: "absolute",
    left: 14,
    top: 12,
  },
});
