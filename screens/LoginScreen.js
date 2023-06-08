import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

import TextInputComponent from "../components/TextInput";
import ButtonComponent from "../components/Button";

const LoginScreen = () => {
  const loginHandle = (values) => {
    console.log(values);
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
