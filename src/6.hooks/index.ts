import React from 'react';

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

// this component hook on resizes and returns current window size
const useWindowSize = () => {
  const [windowSize, setSize] = React.useState(getSize);

  const handleResize = React.useCallback(() => setSize(getSize()), []);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
