import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>PositivePercentage: {positivePercentage}%</li>
            </ul>
        </>
    )
}

export default Statistics;