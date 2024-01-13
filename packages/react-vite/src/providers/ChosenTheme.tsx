import useMediaQuery from '@mui/material/useMediaQuery';
import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

export const ChosenTheme = createContext<IChosenTheme>({} as IChosenTheme);

export const ChosenThemeProvider = ({
  children,
}: { children?: ReactNode }): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useLocalStorage<ThemeName>(
    'theme',
    prefersDarkMode ? 'dark' : 'light',
    true,
  );

  return (
    <ChosenTheme.Provider value={{ theme, setTheme }}>
      {children}
    </ChosenTheme.Provider>
  );
};

type ThemeName = 'dark' | 'light';

interface IChosenTheme {
  theme: ThemeName;
  setTheme: Dispatch<SetStateAction<ThemeName>>;
}
