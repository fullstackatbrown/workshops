import React from "react";
import { View, Text } from "react-native";

export default class Test extends React.Component {
  state = { text: "State" };
  click() {
    this.setState({text: "Updated"})
  }
  render() {
    return (
      <View onClick={this.click.bind(this)}>
        <Text style={{color: (this.state.text === "State") ? 'red' : 'blue',fontWeight: 'bold'}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
