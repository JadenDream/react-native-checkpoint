import React from "react";
import { View } from "react-native";
import ViewCard from "./ViewCardV2";
import { useSelector } from 'react-redux';
import HeadingText from "./../HeadingText";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

/*
const onReview = (correct) => {
    if (correct) {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ numReviewed: this.state.numReviewed + 1 });
};*/

const CardList = () => {
    //currentReview
    let tempCurrentReview = useSelector(state => state.currentReview);
    let reviews = tempCurrentReview.questions;
    let currentReview = tempCurrentReview.currentQuestionIndex;
    let dispatch = useDispatch();
    const navigation = useNavigation();

    console.log("tempCurrentReview:", tempCurrentReview)
    console.log("reviews::", reviews);
    console.log("currentReview:", currentReview);

    if (reviews.length == 0){
        console.log("reviews:", reviews.length);
        return (
            <View>
                <HeadingText>
                CardList({reviews.length})!
                </HeadingText>
            </View>
        );
    }

    let reviews2 = reviews[currentReview];
    console.log("reviews2:", reviews2);

    return (
        <View>
            <HeadingText>
            CardList({reviews.length})!
            </HeadingText>
            <ViewCard 
                answers={reviews2.answers}
                prompt={reviews2.prompt}
                correctAnswer={reviews2.correctAnswer}
                dispatch={dispatch}
                navigation={navigation}
                dataCount={reviews.length}
            />
        </View>
    );
}
/*
[
    {
        "orientation": "back",
        "cardID": "b8f2674791824c792264abd8bf15dc8b",
        "prompt": "the cat",
        "correctAnswer": "die Katze",
        "answers": [
            "das Brot",
            "die Frau",
            "der Hund",
            "die Katze"
        ]
    },
    {
        "orientation": "front",
        "cardID": "b8f2674791824c792264abd8bf15dc8b",
        "prompt": "die Katze",
        "correctAnswer": "the cat",
        "answers": [
            "the bread",
            "the woman",
            "the dog",
            "the cat"
        ]
    }
]
*/

export default CardList;