import React from 'react';

const DetailsQuiz = ({quiz}) => {
    const {question , options} = quiz;
    console.log(quiz)
    return (

        <div className='border rounded border-2 m-5 p-4'>
           <div> <h3>{question}</h3></div>
            {/* <p>{options}</p> */}
             
            <div className='d-grid'>
                {
                    options.map(option => <li>{option}</li> )
                }

            {/* {options.map(option => <Options 
            option ={option}></Options>)} */}
             </div>
             
        </div>
    );
};

export default DetailsQuiz;