import React from "react";
import { StyleSheet, View } from "react-native";

import HeaderImages from "../components/HeaderImages";
import FromToInputBox from "../components/FromToInputBox";
import DatePicker from "../components/DatePicker";
import ButtonComponent from "../components/Button";

const BusSearchScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderImages />
      <View style={styles.journeyContainer}>
        <FromToInputBox
          iconName="map-marker-right-outline"
          placeholder="Source"
          width="90%"
        />
        <FromToInputBox
          iconName="map-marker-left-outline"
          placeholder="Destination"
          width="90%"
        />
        <View style={styles.journeyFooter}>
          <DatePicker />
          <FromToInputBox
            iconName="account-multiple"
            placeholder=""
            width={100}
            keyboardType="numeric"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <ButtonComponent title="Fetch Buses" width={170} />
        </View>
      </View>
    </View>
  );
};

export default BusSearchScreen;

const styles = StyleSheet.create({
  journeyContainer: {},
  journeyFooter: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
