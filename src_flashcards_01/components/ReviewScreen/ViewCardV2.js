import React, { Component } from "react";
import { View } from "react-native";

import HeadingText from "../HeadingText";
import { mkContinueQuitButtons, mkAnswerButtons } from "./ReviewButtons";
import { mkReviewSummary } from "./ReviewSummary"
import { nextReview, stopReview } from "./../../actions/creators";

class ViewCard extends Component {
  static displayName = "ViewCard";

  constructor(props) {
    super(props);
    this.state = this._getInitialState(0);
  }
  
  _getInitialState(clickContinueCount) {
    return { showingAnswer: false, wasCorrect: false, clickContinueCount: clickContinueCount };
  }

  _continue = () => {
    this.setState(this._getInitialState(this.state.clickContinueCount + 1));
    this.props.dispatch(nextReview());
  };

  _quitReviewing = () => {
    this.props.dispatch(stopReview());
    this.props.navigation.goBack();
  };

  _selectAnswer = correct => {
    this.setState({ showingAnswer: true, wasCorrect: correct });
  };
  render() {

    if ((this.state.clickContinueCount +1) >= this.props.dataCount) {
      let percent = 0; //todo 待實作
      return mkReviewSummary(percent, this._quitReviewing);
    }

    return (
      <View>
        <HeadingText>
          {this.props.prompt}
        </HeadingText>
        <HeadingText>
          {((this.state.showingAnswer)?"1":"0")} - {((this.state.wasCorrect)?"1":"0")} - {this.state.clickContinueCount}
        </HeadingText>
        {mkAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._selectAnswer
        )}
        {mkContinueQuitButtons(
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._continue,
          this._quitReviewing
        )}
      </View>
    );
  }
}

export default ViewCard;
