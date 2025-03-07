import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "SelectDistance">;

const SelectDistance = ({ navigation }: Props) => {
  const distances = ["3-5 m", "10-15 m", "20-25 m", "30-35 m", "35-50 m"];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Listen Up!</Text>
      <Text style={styles.subHeading}>Select your Distance!</Text>

      {/* Search Bar */}
      <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#999" />

      {/* Distance List */}
      <FlatList
        data={distances}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, selected === item && styles.selectedItem]}
            onPress={() => setSelected(item)}
          >
            <Text style={[styles.itemText, selected === item && styles.selectedText]}>{item}</Text>
            <View style={[styles.checkbox, selected === item && styles.selectedCheckbox]} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VoiceDetection")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  heading: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subHeading: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#F5F5F5",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007AFF",
    marginBottom: 10,
  },
  itemText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#007AFF",
    borderRadius: 5,
  },
  selectedItem: { backgroundColor: "#007AFF" },
  selectedText: { color: "white" },
  selectedCheckbox: { backgroundColor: "white" },
  button: {
    backgroundColor: "#001F54",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default SelectDistance;
