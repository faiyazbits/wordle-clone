import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ noOfGuesses, handleRestart }) {
  return (
    <Banner status={'happy'}
      action={handleRestart}
      actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in {" "}
        <strong>{noOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
