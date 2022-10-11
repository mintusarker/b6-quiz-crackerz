import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsQuiz from '../DetailsQuiz/DetailsQuiz';

const Quiz = (id) => {
    const quiz = useLoaderData(id);
    console.log(quiz.data.questions)
    return (
        <div className='container'>
           {
            quiz.data.questions.map(quiz => 
            <DetailsQuiz
            quiz = {quiz}
            ></DetailsQuiz>
            )
           }
        </div>
    );
};

export default Quiz;