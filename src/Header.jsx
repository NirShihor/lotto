import { useState, useEffect, useRef } from 'react';
import EuroMillions from './games/EuroMillions';
import Lotto from './games/Lotto';
import SetForLife from './games/SetForLife';
import Thunderball from './games/Thunderball';

const Header = () => {
  const [displayGames, setDisplayGame] = useState(false);

  const display = () => {
    setDisplayGame(true);
  };

  let gamesRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!gamesRef.current.contains(event.target)) {
        setDisplayGame(false);
      }
    });
  });

  return (
    <div>
      <div className='heading fade-in' onClick={display}>
        <h3>
          ➡️ <span className='space'> Display Games </span> ⬅️
        </h3>
        <div class='games' ref={gamesRef}>
          {displayGames && <EuroMillions />}
          {displayGames && <Lotto />}
          {displayGames && <SetForLife />}
          {displayGames && <Thunderball />}
        </div>
      </div>
    </div>
  );
};

export default Header;
