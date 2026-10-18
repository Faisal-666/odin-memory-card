import './App.css';
import { useState } from 'react';
import Game from './components/game/Game';
import Dialog from './components/dialog/dialog.jsx';
import giphyService from './service/giphyService.js';

// This below is mock for testing in dev mode
// import mockApi from './service/dummyService.js';

import useLoading from './hooks/useLoading.js';
import useListImages from './hooks/useListImages.js';
import useScore from './hooks/useScore.js';

const App = () => {
  const [gameId, setGameId] = useState(0);
  const scoreHook = useScore();
  const imgsHook = useListImages();
  const updateGame = () => setGameId(prev => prev + 1);
  const winCondition = () => imgsHook.imgs?.every(img => img.marked);
  
  return (
    <>
      <Game 
        key={gameId} 
        onReset={updateGame} 
        getImages={giphyService}
        loadingHook={useLoading(true)}
        imgsHook={imgsHook}
        scoreHook={scoreHook}
      />

      <Dialog 
        onReset={(ref) => {
          scoreHook.setScore(0);
          updateGame();
          ref.current.close();
        }}
        win={winCondition()}
      />
    </>
  );
};

export default App;