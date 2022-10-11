import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Options from '../Options/Options';
import './DetailsQuiz.css'

const DetailsQuiz = ({quiz ,showAnswerHandle}) => {
    const {question , options, correctAnswer } = quiz;
    // console.log(quiz)

    const notify = () => {
      toast (correctAnswer)
       }
    
    return (
        <div className='border rounded w-75 bg-light border-2 mx-auto my-4 p-5'>
           <div className='quiz-section'> <div><h3>{question}</h3></div>
           <div><button onClick={() => notify()}  className='border-0 bg-light'><FontAwesomeIcon className='text-dark ps-5 align-top' icon ={faEye}></FontAwesomeIcon></button><ToastContainer></ToastContainer>
           </div>
           </div>
             
            <div className='my-5'>
                {/* {
                    options.map(option => <input className='m-1 w-75' type="button"  value= {option} /> )
                } */}
                {
                    options.map((option,idx) => <Options
                    key ={idx}
                    option ={option}
                    ></Options>)
                }
             </div>
             
        </div>
    );
};

export default DetailsQuiz;