import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsQuiz from '../DetailsQuiz/DetailsQuiz';

const Quiz = (id) => {
    const quiz = useLoaderData(id);
    console.log(quiz)
    const {correctAnswer} = quiz;
    // console.log(quiz.data.questions)

    // const showAnswerHandle = (correctAnswer) =>{
    //     const answer = {correctAnswer};
    //     console.log(answer);

    // }

    
    return (
        <div className='container py-5 my-5'>
           {
            quiz.data.questions.map(quiz => 
            <DetailsQuiz
            quiz = {quiz}
            // showAnswerHandle ={showAnswerHandle}
            ></DetailsQuiz>
            )
           }
        </div>
    );
};

export default Quiz;