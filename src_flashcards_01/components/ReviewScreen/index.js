import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {colors} from "../../styles/colors";
import CardList from "./CardList"

class ReviewScreen extends Component {
  static displayName = "ReviewScreen";

  static navigationOptions = { title: "Review" };

  constructor(props) {
    super(props);
    this.state = { numReviewed: 0, numCorrect: 0 };
  }

  onReview = correct => {
    if (correct) {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ numReviewed: this.state.numReviewed + 1 });
  };

  _nextReview = () => {
    this.props.nextReview();
  };

  _quitReviewing = () => {
    this.props.stopReview(this.props.deckid);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <CardList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.blue, flex: 1, paddingTop: 24 }
});

export default ReviewScreen;
