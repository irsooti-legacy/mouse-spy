import { useState, useEffect } from 'react';

const useMouseMovement = () => {
  const [history, setToHistory] = useState([]);
  const [position, setPosition] = useState({ x: null, y: null });

  const mouseMoveHandler = event => {
    const newMove = { x: event.clientX, y: event.clientY };
    setToHistory(history.concat(newMove));
    setPosition(newMove);
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [history]);

  return {
    history,
    position
  };
};

export default useMouseMovement;
