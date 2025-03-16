import React from "react";
import { View, StyleSheet } from "react-native";

import Home from "./src/screens/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
