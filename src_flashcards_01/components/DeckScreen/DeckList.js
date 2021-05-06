import React from "react";
import { useSelector } from 'react-redux';
import { View } from "react-native";
import BtnDeck from "./BtnDeck"
import { useNavigation } from '@react-navigation/native';

const DeckList = () => {
    let decks = useSelector(state => state.decks);
    const navigation = useNavigation();

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
    
    return (
        <View>
            {decks.map(deck =>
                <BtnDeck
                    deck={deck}
                    count={counts[deck.id]}
                    key={deck.id}
                    navigation={navigation}
                />
            )}
        </View>
    );
};
  
  export default DeckList;