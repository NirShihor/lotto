import React, { useState } from 'react';
// TEMP
const EuroMillions = () => {
  const [number, setNumber] = useState();
  const [star, setStar] = useState();
  const [display, setDisplay] = useState(false);

  function handleClick() {
    let numbers = [];

    while (numbers.length < 5) {
      var nbr = Math.floor(Math.random() * 50) + 1;
      numbers.indexOf(nbr) === -1 && numbers.push(nbr);
    }

    numbers.sort(function (a, b) {
      return a - b;
    });

    numbers = numbers.join(' ');

    setNumber(numbers);

    let stars = [];

    while (stars.length < 2) {
      var str = Math.floor(Math.random() * 12) + 1;
      stars.indexOf(str) === -1 && stars.push(str);
    }

    stars.sort(function (a, b) {
      return a - b;
    });

    stars = stars.join(' ');

    setStar(stars);

    setDisplay(true);
  }

  return (
    <div className='game-buttons euromillions fade-in'>
      <button onClick={handleClick}>EuroMillions</button>
      <div className='game-results fade-in'>
        {display && <h3 className='fade-in'>Numbers: {number}</h3>}
        {display && <h3 className='fade-in'>Stars: {star}</h3>}
      </div>
    </div>
  );
};

export default EuroMillions;
