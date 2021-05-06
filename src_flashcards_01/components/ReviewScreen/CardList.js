import React from "react";
import { View } from "react-native";
import ViewCard from "./ViewCardV2";
import { useSelector } from 'react-redux';
import HeadingText from "./../HeadingText";

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
            />
        </View>
    );
}
/*
<ViewCard
                answers={reviews2}
                prompt="test prompt"
            />
*/
                /*onReview={this.onReview}*/
                /* quit={this._quitReviewing} */
                /* {...this.props.reviews[this.props.currentReview]} */
                /* continue={this._nextReview} */

                /*
    if (!reviews || reviews.length === 0) {
        console.log("reviews.length:0");
        return null;
    }
    console.log("reviews.length:" + reviews.length);
    //if (reviews)

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
    },
    {
        "orientation": "back",
        "cardID": "e70d89842ada0755b93c125d4bf1e9af",
        "prompt": "the dog",
        "correctAnswer": "der Hund",
        "answers": [
            "die Katze",
            "die Frau",
            "der Hund",
            "das Brot"
        ]
    },
    {
        "orientation": "front",
        "cardID": "e70d89842ada0755b93c125d4bf1e9af",
        "prompt": "der Hund",
        "correctAnswer": "the dog",
        "answers": [
            "the dog",
            "the cat",
            "the woman",
            "the bread"
        ]
    },
    {
        "orientation": "back",
        "cardID": "00f3dd596e090ea4216e061ee59b7829",
        "prompt": "the woman",
        "correctAnswer": "die Frau",
        "answers": [
            "das Brot",
            "die Katze",
            "die Frau",
            "der Hund"
        ]
    },
    {
        "orientation": "front",
        "cardID": "00f3dd596e090ea4216e061ee59b7829",
        "prompt": "die Frau",
        "correctAnswer": "the woman",
        "answers": [
            "the woman",
            "the cat",
            "the bread",
            "the dog"
        ]
    },
    {
        "orientation": "back",
        "cardID": "88b330f940f7579d395e23684b57f44b",
        "prompt": "the bread",
        "correctAnswer": "das Brot",
        "answers": [
            "die Katze",
            "das Brot",
            "der Hund",
            "die Frau"
        ]
    },
    {
        "orientation": "front",
        "cardID": "88b330f940f7579d395e23684b57f44b",
        "prompt": "das Brot",
        "correctAnswer": "the bread",
        "answers": [
            "the dog",
            "the bread",
            "the woman",
            "the cat"
        ]
    }
]
*/

export default CardList;