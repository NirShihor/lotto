import React, { useState } from 'react';
// TEMP
const SetForLife = () => {
  const [number, setNumber] = useState();
  const [lifeBall, setLifeBall] = useState();
  const [display, setDisplay] = useState(false);

  function handleClick() {
    let numbers = [];

    while (numbers.length < 6) {
      var nbr = Math.floor(Math.random() * 47) + 1;
      numbers.indexOf(nbr) === -1 && numbers.push(nbr);
    }

    numbers.sort(function (a, b) {
      return a - b;
    });

    numbers = numbers.join(' ');

    setNumber(numbers);

    let lifeBall = [];

    while (lifeBall.length < 2) {
      var str = Math.floor(Math.random() * 12) + 1;
      lifeBall.indexOf(str) === -1 && lifeBall.push(str);
    }

    lifeBall.sort(function (a, b) {
      return a - b;
    });

    lifeBall = lifeBall.join(' ');

    setLifeBall(lifeBall);

    setDisplay(true);
  }

  return (
    <div className='game-buttons setForLife fade-in'>
      <button onClick={handleClick}>Set For Life</button>
      <div className='game-results'>
        {display && <h3 className='fade-in'>Numbers: {number}</h3>}
        {display && <h3 className='fade-in'>Life Ball: {lifeBall}</h3>}
      </div>
    </div>
  );
};

export default SetForLife;
