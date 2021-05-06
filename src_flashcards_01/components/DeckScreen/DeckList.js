import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { View } from "react-native";
import BtnDeck from "./BtnDeck"
import { useNavigation } from '@react-navigation/native';

const DeckList = () => {
    let decks = useSelector(state => state.decks);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    if (!decks) {
        return null;
    }

    const counts = decks.reduce(
        (sum, deck) => {
          sum[deck.id] = deck.cards.length;
          return sum;
        },
        {}
    )

    const btnDeckList = decks.map((deck) =>
        <BtnDeck
            key={deck.id}
            deck={deck}
            count={counts[deck.id]}
            deckid={deck.id}
            navigation={navigation}
            dispatch={dispatch}
        />
    )

    return (
        <View>
            {btnDeckList}
        </View>
    );
};
  
  export default DeckList;