import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextInputComponent = ({
  onChangeText,
  value,
  placeholder,
  width,
  paddingLeft,
  ...otherProps
}) => {
  return (
    <TextInput
      style={[styles.input, { width, paddingLeft }]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      {...otherProps}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    borderRadius: 20,
  },
});
