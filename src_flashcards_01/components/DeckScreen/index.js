import React, { Component } from "react";
import { View } from "react-native";
import { addDeck } from "./../../actions/creators";
import DeckCreation from "./DeckCreation";
import DeckList  from './DeckList'
import Button from "./../Button";
import NormalText from "./../NormalText";

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
        <Button onPress={() => this.props.navigation.push('Review')}>
        <NormalText>
          cards
        </NormalText>
        </Button>
        <DeckList />
        <DeckCreation create={this._createDeck} />
      </View>
    );
  }
}

/*
const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction);
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};

const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )
  };
};*/

export default DecksScreen;
