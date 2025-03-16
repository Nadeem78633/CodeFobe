import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const NavigationButtons = ({ onNext, onPrevious }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPrevious}>
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "60%",
  },
  button: {
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 20,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default NavigationButtons;
