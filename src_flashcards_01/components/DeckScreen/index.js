import React, { Component } from "react";
import { View } from "react-native";

//import { connect } from "react-redux";

//import { MockDecks } from "./../../data/Mocks";
import { addDeck, reviewDeck } from "./../../actions/creators";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";
import { useSelector, useDispatch } from 'react-redux';
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

  //_addCards = deckID => {
  //  this.props.navigation.navigate("CardCreation", { deckID: deckID });
  //};

  //_review = deckID => {
  //  this.props.reviewDeck(deckID);
  //  this.props.navigation.navigate("Review");
  //};

  //static decks = useSelector(state => state.decks);
  //static navigation = useSelector(state => state.navigation);
/*
  _mkDeckViews() {
    
    if (!this.decks) {
      return null;
    }

    const counts = this.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )

    return this.decks.map(deck => {
      return (
        <Deck
          deck={deck}
          count={counts[deck.id]}
          key={deck.id}
          navigation={this.navigation}
        />
      );
    });
  }*/

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
