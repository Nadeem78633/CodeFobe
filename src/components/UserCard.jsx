import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      {/* Circle around the avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>

      {/* User information in two columns */}
      <View style={styles.row}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.id}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>UID:</Text>
        <Text style={styles.value}  ellipsizeMode="tail">
          {user.uid}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.password}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.first_name}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.last_name}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.username}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
          {user.email}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    padding: 20, 
    alignItems: "center",
    marginVertical: 10,
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
    marginBottom: 50,
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
});

export default UserCard;
