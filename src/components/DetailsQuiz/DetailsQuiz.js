import React from 'react';

const DetailsQuiz = ({quiz}) => {
    console.log(quiz)
    return (
        <div>
            <h3>{quiz.question}</h3>
             <ul className=''>
             <li>{quiz.options}</li>
             </ul>
        </div>
    );
};

export default DetailsQuiz;