import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../Navigation"; // Adjust path if needed

type Props = NativeStackScreenProps<RootStackParamList, "SelectVoices">;

const SelectVoices = ({ navigation }: Props) => {
  const voices = ["Bell Ringing", "Baby Crying", "Pet Barking", "Screaming", "Knocking"];
  const [selectedVoices, setSelectedVoices] = useState<string[]>([]);

  const toggleSelection = (voice: string) => {
    if (selectedVoices.includes(voice)) {
      setSelectedVoices(selectedVoices.filter((v) => v !== voice));
    } else {
      setSelectedVoices([...selectedVoices, voice]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title & Subtitle */}
      <Text style={styles.heading}>Listen Up!</Text>
      <Text style={styles.subHeading}>Select your Targeted Voices!</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#999" />
      </View>

      {/* Voice Options List */}
      <FlatList
        data={voices}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, selectedVoices.includes(item) && styles.selectedItem]}
            onPress={() => toggleSelection(item)}
          >
            <Text style={[styles.itemText, selectedVoices.includes(item) && styles.selectedText]}>
              {item}
            </Text>
            <View
              style={[styles.checkbox, selectedVoices.includes(item) && styles.selectedCheckbox]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SelectDistance")}>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#F5F5F5",
  },
  searchIcon: { marginRight: 5 },
  input: { flex: 1, height: 40, fontSize: 16, color: "#333" },
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

export default SelectVoices;
