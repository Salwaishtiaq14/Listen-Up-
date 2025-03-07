import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "VoiceDetection">;

const VoiceDetection = ({ navigation }: Props) => {
  const [soundDetected, setSoundDetected] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header with Notification & Menu Icons */}
      <View style={styles.header}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.title}>Listen Up!</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Waveform Placeholder */}
      <View style={styles.waveform} />

      {/* Microphone Detection Section */}
      <TouchableOpacity
        style={styles.micContainer}
        onPress={() => {
          setSoundDetected(true);
          Alert.alert("Sound Detected!");
        }}
      >
        <View style={styles.rippleEffect}>
          <Ionicons name="mic" size={40} color="white" />
        </View>
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => Alert.alert("Closed!")}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      {/* Voice Detected Button */}
      <TouchableOpacity style={styles.detectedButton} onPress={() => navigation.navigate("SelectDistance")}>
        <Text style={styles.detectedText}>VOICE DETECTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#F5F5F5", paddingTop: 50 },
  header: { flexDirection: "row", justifyContent: "space-between", width: "90%", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", textDecorationLine: "underline" },
  waveform: {
    width: "100%",
    height: 100,
    backgroundColor: "black",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 10,
  },
  micContainer: {
    marginTop: -50,
    backgroundColor: "black",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  rippleEffect: {
    backgroundColor: "black",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: "50%",
    right: "15%",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  detectedButton: {
    position: "absolute",
    bottom: 50,
    paddingVertical: 15,
    width: "80%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    alignItems: "center",
  },
  detectedText: { fontSize: 18, fontWeight: "bold", color: "black" },
});

export default VoiceDetection;
