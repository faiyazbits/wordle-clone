import React from 'react';

function GuessForm({ onNewGuess }) {
  let [guess, setGuess] = React.useState("");
  function onGuessSubmit(e) {
    e.preventDefault();
    setGuess("")
    onNewGuess(guess)
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern='^.{5}$' value={guess} id="guess-input" onChange={(e) => setGuess(e.target.value.toUpperCase())} type="text" />
    </form>
  );
}

export default GuessForm;
