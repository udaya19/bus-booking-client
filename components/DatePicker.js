import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({}) => {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <DateTimePicker mode="date" display="default" value={date} />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
