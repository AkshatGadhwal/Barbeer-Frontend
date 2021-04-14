import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

async function getUser(props) {
  const token = await AsyncStorage.getItem('token');
  fetch("http://192.168.43.190:3000/userData",{
       method:"GET",
       headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
     })
     .then(res=>res.json())
     .then(async (data)=>{    
        props.navigation.navigate("Details",{user:data});
     })
}

async function getShops(props) {
  const token = await AsyncStorage.getItem('token');
  fetch("http://192.168.43.190:3000/shopsData",{
       method:"GET",
       headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
     })
     .then(res=>res.json())
     .then(async (data)=>{    
        props.navigation.navigate("Shops",{shops:data});
     })
}

async function LogoutUser(props) {
  await AsyncStorage.removeItem('token');
  props.navigation.navigate('LoginSignup');
}

export default function HomeScreen(props) {

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Text>You are at Home Screen</Text>
      <TouchableOpacity style={styles.loginBtn} 
      onPress={() => getUser(props)}>
        <Text>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} 
      onPress={() => getShops(props)}>
        <Text>Shops list</Text>
      </TouchableOpacity>
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