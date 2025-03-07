import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TokenService from "./WebTokens"; // Adjusted path since it's in the same folder

const TokenTestScreen = () => {
  const [token, setToken] = useState("");

  // Generate a new token
  const handleGenerateToken = async () => {
    const newToken = await TokenService.generateToken();
    setToken(newToken);
  };

  // Retrieve the saved token
  const handleGetToken = async () => {
    const savedToken = await TokenService.getToken();
    setToken(savedToken || "No token found");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Token Test Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleGenerateToken}>
        <Text style={styles.buttonText}>Generate Token</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGetToken}>
        <Text style={styles.buttonText}>Get Token</Text>
      </TouchableOpacity>

      <Text style={styles.tokenText}>Stored Token: {token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "blue", padding: 15, borderRadius: 5, marginBottom: 10 },
  buttonText: { color: "white", fontSize: 16 },
  tokenText: { fontSize: 18, marginTop: 20, textAlign: "center", paddingHorizontal: 10 },
});

export default TokenTestScreen;
