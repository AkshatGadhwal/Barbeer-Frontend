import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

async function LogoutUser(props) {
  await AsyncStorage.removeItem('token');
  props.navigation.navigate('LoginSignup');
}

export default function UserDetailsScreen({navigation,route}) {

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Text>{route.params.user.email}</Text>
      <TouchableOpacity style={styles.loginBtn} 
      onPress={() => LogoutUser(props)}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});