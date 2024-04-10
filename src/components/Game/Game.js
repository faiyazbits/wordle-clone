import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  console.info({ answer });

  function onNewGuess(newGuess) {
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (checkWin(newGuess)) {
      setGameStatus('won');
    }
    else if (checkLoss(nextGuesses)) {
      setGameStatus('lost');
    }
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
  }

  function checkWin(newGuess) {
    return newGuess === answer
  }

  function checkLoss(nextGuesses) {
    return nextGuesses.length >= NUM_OF_GUESSES_ALLOWED
  }

  const hasWon = gameStatus === 'won';
  const hasLost = gameStatus === 'lost';
  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessList validatedGuesses={validatedGuesses} />
      <GuessForm onNewGuess={onNewGuess} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {hasWon && <WonBanner noOfGuesses={guesses.length} handleRestart={handleRestart} />}
      {hasLost && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>);
}

export default Game;
