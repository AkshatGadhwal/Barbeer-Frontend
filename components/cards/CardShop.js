import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function CardShop(props) {
  const {uri,name,distance,rating,price} = props.shop;
    return (
        <View style={{width:"100%"}}>
 
        <Card style={styles.card}>
          <CardImage 
            source={{uri: uri}} 
            title="Top 10 South African beaches"
          />
          <CardTitle
            subtitle={name}
          />
          <CardContent >
              <Text>{rating}</Text>
              <Text>{price}</Text>
              <Text>{distance}</Text>
          </CardContent>
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => {}}
              title="Share"
              color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
            />
          </CardAction>
        </Card>
       
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
    card: {
      height:'50%',
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
    }
  });