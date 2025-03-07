import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

export default function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email && password) {
      console.log("Signed in with:", email, password);
      navigation.navigate("Home");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.title}>Sign in to Listen Up!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, width: "100%", marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: "#1F3865", padding: 10, borderRadius: 5, width: "100%", alignItems: "center" },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  link: { color: "#1F3865", textDecorationLine: "underline", marginTop: 10 },
});
