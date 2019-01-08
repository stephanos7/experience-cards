import React from 'react';
import { Text, View } from 'react-native';
import styles, {SHADOWS} from "./styles";

import List from "./components/List";

export default class App extends React.Component {
  render() {
    return (
      <View style={SHADOWS.vertical}>
        <List />
      </View>
    );
  }
}
