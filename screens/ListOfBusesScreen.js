import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import color from "../data/color";

import BusesList from "../components/BusesList";

const ListOfBusesScreen = ({ route }) => {
  const [buses, setBuses] = useState([]);
  const { result, numOfPassengers } = route.params;
  useEffect(() => {
    console.log("Buses List screen:", result);
    setBuses(result);
  }, []);
  return (
    <View style={styles.busesContainer}>
      {buses.map((bus) => (
        <BusesList
          arrTime={bus.arrivalTime}
          deptTime={bus.departureTime}
          from={bus.from}
          price="600"
          to={bus.to}
          travelTime="6:00 hrs"
          numOfPassengers={numOfPassengers}
          serviceNumber={bus.serviceNumber}
          key={bus.serviceNumber}
        />
      ))}
    </View>
  );
};

export default ListOfBusesScreen;

const styles = StyleSheet.create({
  busesContainer: {
    flex: 1,
    backgroundColor: color.bgWhite,
    alignItems: "center",
    paddingTop: 20,
  },
});
