import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

export interface Props {
  url: string;
}

const NavigateButton = ({ url }: Props) => {
  const [disabled, setDisabled] = useState(!navigator.onLine);

  useEffect(() => {
    const listener = () => {
      setDisabled(true);
    };
    window.addEventListener('offline', listener);

    return () => {
      window.removeEventListener('offline', listener);
    };
  }, []);

  useEffect(() => {
    const listener = () => {
      setDisabled(false);
    };
    window.addEventListener('online', listener);

    return () => {
      window.removeEventListener('online', listener);
    };
  }, []);

  const history = useHistory();

  return (
    <button disabled={disabled} onClick={() => history.push(url)}>
      Navigate
    </button>
  );
};

export default NavigateButton;
