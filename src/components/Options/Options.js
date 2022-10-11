import React from 'react';

const Options = ({option ,quizAnswerHandle}) => {
    return (
        <div className='border rounded p-2 m-2'>
            <button onClick={() => quizAnswerHandle(option)} className='border-0 bg-light'><input type="radio" name="answer"/> {option}</button>
        </div>
    );
};

export default Options;