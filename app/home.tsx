import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Listen Up!</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding")}>
        <Text style={styles.buttonText}>Onboarding</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectVoices")}>
        <Text style={styles.buttonText}>Select Voices</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectDistance")}>
        <Text style={styles.buttonText}>Select Distance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VoiceDetection")}>
        <Text style={styles.buttonText}>Detection</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#1F3865", padding: 15, marginVertical: 5, borderRadius: 5, width: "80%" },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 },
});
