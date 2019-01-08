import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../styles";
import Card from "./Card";

export default class List extends React.Component {
  state = {
    data: [{
      name: "Breakfast",
      source: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, 
    {
      name: "Lunch",
      source:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, 
    {
      name: "Dinner",
      source:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, 
    {
      name: "Spa",
      source:"https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }]
  }

  _renderItem = dataItem => <Card {...dataItem} /> 

  render(){
    return(
        <FlatList 
          style={styles.cardList}
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={ (item, index) => index.toString()}
        />
    )
  }
}