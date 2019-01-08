import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../styles";
import Card from "./Card";

export default class List extends React.Component {
  state = {
    data: [{name: "Breakfast"}, {name: "Lunch"}, {name: "Dinner"}, {name: "Spa"}]
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