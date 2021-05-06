import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Button";
import NormalText from "../NormalText";
import {colors} from "../../styles/colors";
import { reviewDeck } from "./../../actions/creators";

class BtnDeck extends Component {
  static displayName = "Deck";

  _review = () => {
    //reviewDeck
    this.props.dispatch(reviewDeck(this.props.deckid));
    this.props.navigation.navigate('Review', { deckID: this.props.deckid });
  };

  _addCards = () => {
    this.props.navigation.navigate('CardCreation', { deckID: this.props.deckid });
  };

  render() {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton} onPress={() => this._review()}>
          <NormalText>
            {this.props.deck.name}: {this.props.count} cards
          </NormalText>
        </Button>

        <Button style={styles.editButton} onPress={() => this._addCards()}>
          <NormalText>+</NormalText>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: "row",
    alignItems: "stretch",
    padding: 10,
    fontSize: 18,
    marginBottom: 5
  },
  deckButton: { 
    backgroundColor: colors.pink, 
    padding: 10, 
    margin: 0, 
    flex: 1 
  },
  editButton: {
    width: 60,
    backgroundColor: colors.pink2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  }
});

export default BtnDeck;
