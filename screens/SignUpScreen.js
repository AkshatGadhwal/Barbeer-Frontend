import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCredSignup= async (props)=>{
     fetch("http://192.168.43.190:3000/signup",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              await AsyncStorage.setItem('token',data.token)
              props.navigation.navigate("Home")
            } catch (e) {
              console.log("error hai",e)
            }
     })
  }

  const sendCredLogin= async (props)=>{
    fetch("http://192.168.43.190:3000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json',
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token);
             console.log(' login buttn clicked')
             props.navigation.navigate("Home",{message:"You are successfully logged in !!!"})
           } catch (e) {
             console.log("error hai",e)
           }
    })
 }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.loginBtn}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.loginBtn}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => sendCredSignup(props)}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.loginText}  onPress={() => sendCredLogin(props)}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} 
      onPress={() => props.navigation.navigate("Home")}>
        <Text style={styles.loginText}>Home</Text>
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

  image: {
    marginBottom: 40,
    height:20,
    width:20
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
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