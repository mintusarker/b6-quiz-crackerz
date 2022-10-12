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
      toast.success (correctAnswer , {autoClose : 800} )
       };

       const quizAnswerHandle = (right) => {
        if(right === correctAnswer){
            toast.success ('Correct Answer', {autoClose : 800})
        }
        else {
            toast.warning ('Wrong Answer' , {autoClose : 800})
        }
       };
    
    return (
        <div className='border rounded border-2 w-75 bg-light mx-auto my-5 p-5'>
           <div className='quiz-section'> <div><h3 className='text-secondary'>{question}</h3></div>
           <div><button onClick={() => notify()}  className='border-0 bg-light'><FontAwesomeIcon className='text-dark ps-5 align-top' icon ={faEye}></FontAwesomeIcon></button><ToastContainer position='top-center'></ToastContainer>
           </div>
           </div>
             
            <div className='mt-5'>  
                {
                    options.map((option,idx) => <Options
                    key ={idx}
                    option ={option}
                    quizAnswerHandle ={quizAnswerHandle}
                    ></Options>)
                }
             </div>
             
        </div>
    );
};

export default DetailsQuiz;