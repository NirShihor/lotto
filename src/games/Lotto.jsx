import React, { useState } from 'react';
// TEMP
const Lotto = () => {
  const [number, setNumber] = useState();
  const [display, setDisplay] = useState(false);

  function handleClick() {
    let numbers = [];

    while (numbers.length < 6) {
      var nbr = Math.floor(Math.random() * 59) + 1;
      numbers.indexOf(nbr) === -1 && numbers.push(nbr);
    }

    numbers.sort(function (a, b) {
      return a - b;
    });

    numbers = numbers.join(' ');

    setNumber(numbers);

    setDisplay(true);
  }

  return (
    <div className='game-buttons lotto fade-in'>
      <button onClick={handleClick}>Lotto</button>
      <div className='game-results'>
        {display && <h3 className='fade-in'>Numbers: {number}</h3>}
      </div>
    </div>
  );
};

export default Lotto;
