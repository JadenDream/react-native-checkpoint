import React, { Component } from "react";
import { View } from "react-native";
import { addDeck } from "./../../actions/creators";
import DeckCreation from "./DeckCreation";
import DeckList  from './DeckList'

class DecksScreen extends Component {
  static displayName = "DecksScreen";
  static navigationOptions = { title: "All Decks" };

  _createDeck = name => {
    let createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);
    this.props.navigation.navigate("CardCreation", {
      deckID: createDeckAction.data.id
    });
  };

  render() {
    return (
      <View>
        <DeckList />
        <DeckCreation create={this._createDeck} />
      </View>
    );
  }
}

export default DecksScreen;
