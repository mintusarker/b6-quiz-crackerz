import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsQuiz from '../DetailsQuiz/DetailsQuiz';

const Quiz = (id) => {
    const quiz = useLoaderData(id);
    console.log(quiz)
    const {correctAnswer} = quiz;
    // console.log(quiz.data.questions)

    
    return (
        <div className='container py-5 my-5'>
            <h3 className='text-center text-primary'>Quiz of React are bellow :</h3>
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