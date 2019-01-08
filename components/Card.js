import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from "../styles";

export default class Card extends React.Component{
  render(){
    const source = this.props.item.source

    return (
      <View style={styles.cardShadow}>
        <Image source={{uri:source}} style={styles.card} />
      </View>
    )
  }
}