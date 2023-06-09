import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";

import AppNavigation from "./navigation/AppNavigation";

import AuthContext from "./context/context";

import getLoggedInUser from "./context/auth";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [user, setUser] = useState();
  const restoreUser = async () => {
    const user = await getLoggedInUser();
    if (!user) return null;
    setUser(user);
  };
  useEffect(() => {
    restoreUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {user ? <AppNavigation /> : <LoginScreen />}
        </SafeAreaView>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
