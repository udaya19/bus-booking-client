import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ value, handleChange }) => {
  return (
    <View>
      <DateTimePicker
        mode="date"
        display="default"
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
