import React from 'react';
import { nanoid } from 'nanoid';
import style from '../FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {Object.keys(options).map((option) => (
                <button className={style.buttonFeedback} key={nanoid()} type='button' name={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </>
    );
};

export default FeedbackOptions;