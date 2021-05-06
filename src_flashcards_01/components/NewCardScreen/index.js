import React, { Component } from "react";
import { View } from "react-native";
import NewCard from "./NewCard"
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

class NewCardScreen extends Component {
  static displayName = "NewCardScreen";
  static navigationOptions = { title: "New Card" };

  render() {
    return (
      <View>
        <NewCardShow />
      </View>
    );
  }
}

const NewCardShow = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const deckID = route.params.deckID;

  return (
      <View>
        <NewCard
            deckID={deckID}
            navigation={navigation}
            dispatch={dispatch}
        />
      </View>
  );
};

export default NewCardScreen;
