import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

export default function SignupScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {/* Add your sign-up form components here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});
