import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../data/color";

const ListOfBusesScreen = ({ route }) => {
  const [buses, setBuses] = useState([]);
  const { result } = route.params;
  useEffect(() => {
    console.log("Buses List screen:", result);
    setBuses(result);
  }, []);
  return (
    <View style={styles.busesContainer}>
      <View style={styles.busInformation}>
        <View style={styles.travelContainer}>
          <View style={styles.travelInfo}>
            <View style={styles.from}>
              <Text style={styles.time}>6:00</Text>
              <Text style={styles.city}>Vijayawada</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons name="arrow-down" size={35} />
            </View>
            <View style={styles.to}>
              <Text style={styles.time}>12:00</Text>
              <Text style={styles.city}>Chennai</Text>
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
              <Text style={{ fontWeight: "500", fontSize: 15 }}>6:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.addInfoContainer}>
          <View>
            <Text style={styles.price}>600/-</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: color.secondaryWhite }}>2</Text>
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
    </View>
  );
};

export default ListOfBusesScreen;

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
