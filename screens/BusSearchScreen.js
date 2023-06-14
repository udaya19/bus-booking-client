import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

import HeaderImages from "../components/HeaderImages";
import FromToInputBox from "../components/FromToInputBox";
import DatePicker from "../components/DatePicker";
import ButtonComponent from "../components/Button";

import { getBusesAPI } from "../api/buses";

const BusSearchScreen = ({ navigation }) => {
  const [dateOfJouney, setDateOfJourney] = useState(new Date());
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfJourney;
    setDateOfJourney(currentDate);
  };
  const handleSubmit = async (values) => {
    const result = (await getBusesAPI(values.from, values.to)).data;
    console.log("Buses:", result);
    navigation.navigate("busesList", {
      result: result.service,
      numOfPassengers: values.numOfPassengers,
    });
  };
  return (
    <View>
      <HeaderImages />
      <View style={styles.journeyContainer}>
        <Formik
          initialValues={{
            from: "",
            to: "",
            numOfPassengers: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <>
              <FromToInputBox
                iconName="map-marker-right-outline"
                placeholder="Source"
                width="90%"
                value={values.from}
                handleChange={handleChange("from")}
              />
              <FromToInputBox
                iconName="map-marker-left-outline"
                placeholder="Destination"
                width="90%"
                value={values.to}
                handleChange={handleChange("to")}
              />
              <View style={styles.journeyFooter}>
                <DatePicker
                  value={dateOfJouney}
                  handleChange={handleDateChange}
                />
                <FromToInputBox
                  iconName="account-multiple"
                  placeholder=""
                  width={100}
                  keyboardType="numeric"
                  value={values.numOfPassengers}
                  handleChange={handleChange("numOfPassengers")}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <ButtonComponent
                  title="Fetch Buses"
                  width={170}
                  onSubmit={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
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
