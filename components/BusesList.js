import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../data/color";

const BusesList = ({
  deptTime,
  arrTime,
  from,
  to,
  travelTime,
  price,
  numOfPassengers,
  serviceNumber,
}) => {
  return (
    <View style={styles.busInformation}>
      <Text style={{ color: color.secondaryWhite }}>
        Service Number: {serviceNumber}
      </Text>
      <View style={styles.travelContainer}>
        <View style={styles.travelInfo}>
          <View style={styles.from}>
            <Text style={styles.time}>{deptTime}</Text>
            <Text style={styles.city}>{from}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons name="arrow-down" size={35} />
          </View>
          <View style={styles.to}>
            <Text style={styles.time}>{arrTime}</Text>
            <Text style={styles.city}>{to}</Text>
          </View>
        </View>
        <View style={styles.travelTime}>
          <Text style={{ color: color.secondaryWhite, marginLeft: 10 }}>
            Travel Time
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <MaterialCommunityIcons name="clock-outline" />
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              {travelTime}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.addInfoContainer}>
        <View>
          <Text style={styles.price}>{price}/-</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: color.secondaryWhite }}>{numOfPassengers}</Text>
          <MaterialCommunityIcons
            name="seat-passenger"
            color={color.secondaryWhite}
            size={20}
          />
        </View>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="check-circle"
            color={color.white}
            size={30}
          />
          <Text style={{ color: color.white, fontWeight: "600" }}>
            Book Seats
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BusesList;

const styles = StyleSheet.create({
  busesContainer: {
    flex: 1,
    backgroundColor: color.bgWhite,
    alignItems: "center",
    marginTop: 10,
  },
  busInformation: {
    backgroundColor: color.white,
    padding: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  travelContainer: {
    flexDirection: "row",
    gap: 50,
  },
  travelInfo: {
    flexDirection: "column",
  },
  from: {
    flexDirection: "row",
    gap: 10,
  },
  city: {
    fontWeight: "700",
    fontSize: 20,
  },
  time: {
    fontWeight: "500",
    fontSize: 20,
  },
  to: {
    flexDirection: "row",
    gap: 10,
  },
  travelTime: {
    justifyContent: "center",
  },
  price: {
    fontWeight: "700",
    fontSize: 20,
  },
  addInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.primaryRed,
    borderRadius: 30,
    width: 120,
  },
});
