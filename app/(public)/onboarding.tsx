import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/onboarding.png")} style={styles.image} />
      <Text style={styles.title}>Welcome to Listen Up!</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: "100%", height: "50%", resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#327E72", padding: 16, borderRadius: 8 },
  buttonText: { color: "white", fontSize: 16, textAlign: "center" },
});
