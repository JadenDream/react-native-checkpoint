import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "../reducers/index";

import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

let store = createStore(reducer);

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen 
              name="Home" 
              component={DeckScreen} 
            >
            </Stack.Screen>
            <Stack.Screen 
              name="CardCreation" 
              component={NewCardScreen} 
            />
            <Stack.Screen 
              name="Review" 
              component={ReviewScreen} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
