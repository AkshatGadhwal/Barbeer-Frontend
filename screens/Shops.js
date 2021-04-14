import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CardShopList from "../components/cards/CardFlatList";

async function LogoutUser(props) {
  await AsyncStorage.removeItem('token');
  props.navigation.navigate('LoginSignup');
}

export default function UserDetailsScreen({navigation,route}) {
  return (
    <View style={styles.container}>
        <CardShopList shops={route.params.shops}/>
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