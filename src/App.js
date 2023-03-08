import React, { useEffect, useState } from "react";
import GameInfo from "./components/GameInfo";
import MainGrid from "./components/MainGrid";
import './App.css';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenList, setChosenList] = useState([]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const validateScore = (image) => {
    console.log(image)
    if (
      !chosenList.some(listImage => {
        return listImage.name === image.name;
      })
    ) {
      setChosenList([...chosenList, image]);
      incrementScore();
    } else {
      setChosenList([]);
      resetScore();
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div id="main-background">
      <GameInfo score={score} bestScore={bestScore} />
      <MainGrid validateScore={validateScore}/>
    </div>
  );
};

export default App;
