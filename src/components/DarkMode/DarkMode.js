import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('light');

  function setMode(mode) {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  function toggleTheme() {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);

  return [theme, toggleTheme];
}

export default useDarkMode;