import React, { useRef } from 'react';
import useMouseMovement from '../hooks/mouse';

const App = () => {
  const mouseMovements = useMouseMovement();
  const pointerRef = useRef();

  const mouseMovementsHandler = () => {
    const copyMouseMovements = mouseMovements.history.slice();
    if (copyMouseMovements.length === 0) return;
    let index = 0;
    let x = setInterval(() => {
      pointerRef.current.style.left = copyMouseMovements[index].x + 'px';
      pointerRef.current.style.top = copyMouseMovements[index].y + 'px';
      if (index === copyMouseMovements.length - 1) return clearInterval(x);

      index = index + 1;
    }, 500);
  };

  return (
    <div>
      <button onClick={mouseMovementsHandler}>Vedi che strada hai fatto</button>
      <img
        alt="cursor"
        width="20"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTcsMmwxMiwxMS4ybC01LjgsMC41bDMuMyw3LjNsLTIuMiwxbC0zLjItNy40TDcsMTguNVYyIi8+PC9zdmc+"
        ref={pointerRef}
        style={{ position: 'absolute', top: 0, left: 0, transition: '.5s' }}
      />
    </div>
  );
};

export default App;
