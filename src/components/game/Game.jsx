import style from './style.module.css';
import { useState, useEffect } from 'react';
import Card from '../card/card';
import responseTransformer from '../../utils/responseTransformer';

const Game = ({ onReset, getImages, loadingHook, imgsHook, scoreHook}) => {
  const [error, setError] = useState(null);
  const { isLoading, setLoading } = loadingHook;
  const { imgs, setImgs, markImage, shuffle } = imgsHook;
  const { score, setScore, highestScore } = scoreHook;

  const handleClick = (id) => {
    const img = imgs.find(img => img.id === id);
    
    if(!img.marked) {
      markImage(id);
      setScore(prev => prev + 1);
      shuffle();
    } else {
      onReset();
      setScore(0);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getImages();

        setImgs(responseTransformer(data));
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false);
        shuffle();
      }
    })();
  }, []);

  return (
    isLoading 
      ? <h1>Fetching images...</h1>
      : <>
        <header className={style.header}>
            <h2>Score : {score}</h2>
            <h2>Best Score: {highestScore}</h2>
        </header>
        <main className={style.container}>
          {imgs.map(data => (
            <Card
              key={data.id}
              data={data}
              handleClick={handleClick}
            />
          ))}
        </main>
      </>
  );
};

export default Game;