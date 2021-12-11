import React, { useState } from 'react';
// TEMP
const Thunderball = () => {
  const [number, setNumber] = useState();
  const [thunderBall, setThunderBall] = useState();
  const [display, setDisplay] = useState(false);

  function handleClick() {
    let numbers = [];

    while (numbers.length < 5) {
      var nbr = Math.floor(Math.random() * 39) + 1;
      numbers.indexOf(nbr) === -1 && numbers.push(nbr);
    }

    numbers.sort(function (a, b) {
      return a - b;
    });

    numbers = numbers.join(' ');

    setNumber(numbers);

    let thunderBall = [];

    while (thunderBall.length < 2) {
      var str = Math.floor(Math.random() * 12) + 1;
      thunderBall.indexOf(str) === -1 && thunderBall.push(str);
    }

    thunderBall.sort(function (a, b) {
      return a - b;
    });

    thunderBall = thunderBall.join(' ');

    setThunderBall(thunderBall);

    setDisplay(true);
  }

  return (
    <div className='game-buttons thunderball fade-in'>
      <button onClick={handleClick}>ThunderBall</button>
      <div className='game-results fade-in'>
        {display && <h3 className='fade-in'>Numbers: {number}</h3>}
        {display && <h3 className='fade-in'>Thunderball: {thunderBall}</h3>}
      </div>
    </div>
  );
};

export default Thunderball;
