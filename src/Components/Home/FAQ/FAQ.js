import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const FAQ = ({faq}) => {
    const {question,answer} = faq
    const [isShowAnswer,setIsShowAnswer] = useState(false)
    const handleShowAnswer = () =>{
        setIsShowAnswer(!isShowAnswer)
    }
    return (
        <div className='ml-md-5 ml-0 mt-4'>
             <h4 className='ml-md-3 ml-0'>{
                 isShowAnswer ? <FontAwesomeIcon icon={faMinus} onClick={handleShowAnswer} style={{cursor:'pointer'}}></FontAwesomeIcon>:<FontAwesomeIcon  icon={faPlus} onClick={handleShowAnswer} style={{cursor:'pointer'}}></FontAwesomeIcon>
                 }<span className='ml-3'>{question}</span></h4>
             {
                 isShowAnswer && <p className='ml-md-5 ml-0 '>{answer}</p>
             }
        </div>
    );
};

export default FAQ;