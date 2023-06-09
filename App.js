import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import AuthContext from "./context/context";

import getLoggedInUser from "./context/auth";

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
      <SafeAreaView style={styles.container}>
        {user ? <HomeScreen /> : <LoginScreen />}
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
