import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsQuiz from '../DetailsQuiz/DetailsQuiz';

const Quiz = (id) => {
    const quiz = useLoaderData(id);
    console.log(quiz.data.questions)
    return (
        <div>
           {
            quiz.data.questions.map(quiz => <ul>
            <DetailsQuiz
            quiz = {quiz}
            ></DetailsQuiz>
            </ul>)
           }
        </div>
    );
};

export default Quiz;