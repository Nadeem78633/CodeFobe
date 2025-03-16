import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserCard = ({ user }) => {
  const userFields = [
    { label: "ID:", value: user.id },
    { label: "UID:", value: user.uid },
    { label: "Password:", value: user.password },
    { label: "First Name:", value: user.first_name },
    { label: "Last Name:", value: user.last_name },
    { label: "Username:", value: user.username },
    { label: "Email:", value: user.email },
  ];

  const renderRow = ({ label, value }, index) => (
    <View key={label}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}  ellipsizeMode="tail">
          {value}
        </Text>
      </View>
      {index < userFields.length - 1 && label !== "Email:" && (
        <View style={styles.divider} />
      )}
    </View>
  );

  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      {userFields.map(renderRow)}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 20,
    alignItems: "center",
   
   backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
    width: "30%",
  },
  value: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
    flexShrink: 1,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 10,
  },
});

export default UserCard;
