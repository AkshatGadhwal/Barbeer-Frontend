import React from 'react';
import {View,FlatList} from 'react-native';
import CardShop from './CardShop';

export default function CardList(props) {
    return(
        <View>
            <FlatList
              data = {props.shops}
              renderItem={({item}) => <CardShop shop={item} />}
            />
        </View>
    )
}