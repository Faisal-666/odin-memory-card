import { useState } from 'react';

const useScore = () => {
    const [score, setScore] = useState(0);
    const [highestScore, sethighestScore] = useState(0);
    if (score > highestScore) sethighestScore(score);

    return {
        score,
        highestScore,
        setScore,
    }
};

export default useScore;