import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

import TextInputComponent from "../components/TextInput";
import ButtonComponent from "../components/Button";

import { loginApi } from "../api/user";

import useAuth from "../context/useAuth";

const LoginScreen = () => {
  const { getUser } = useAuth();
  const loginHandle = async (values) => {
    const result = (await loginApi(values.email, values.password)).data;
    console.log(result);
    await getUser(result.token);
  };
  return (
    <View style={styles.loginContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => loginHandle(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <TextInputComponent
              placeholder="Enter your email"
              placeholderTextColor="black"
              value={values.email}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
            />
            <TextInputComponent
              placeholder="Enter your poassword"
              placeholderTextColor="black"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <ButtonComponent onSubmit={handleSubmit} title="Login" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
