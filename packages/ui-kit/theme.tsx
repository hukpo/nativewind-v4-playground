import { vars } from 'nativewind';
import { Platform } from 'react-native';
import { PropsWithChildren, createContext, useContext, useEffect, useMemo } from 'react';

import { UIView } from './ui-view';

type Theme = {
  dark: boolean;
  colors: {
    background: string;
    foreground: string;

    muted: string;
    'muted-foreground': string;

    card: string;
    'card-foreground': string;

    primary: string;
    'primary-active': string;
    'primary-foreground': string;

    secondary: string;
    'secondary-active': string;
    'secondary-foreground': string;

    input: string;
    'input-foreground': string;

    destructive: string;
    'destructive-active': string;
    'destructive-foreground': string;

    warning: string;

    success: string;
    'success-foreground': string;

    border: string;
    ring: string;
  };
};

export type ThemeColor = keyof Theme['colors'] | Omit<string, keyof Theme['colors']>;

const ThemeContext = createContext<Theme | null>(null);

const theme: Theme = {
  dark: false,
  colors: {
    background: 'rgba(242, 243, 247, 1)',
    foreground: 'rgba(0, 0, 0, 1)',

    muted: 'rgba(237, 238, 240, 1)',
    'muted-foreground': 'rgba(148, 149, 150, 1)',

    card: 'rgba(255, 255, 255, 1)',
    'card-foreground': 'rgba(0, 0, 0, 1)',

    primary: '#1D273C',
    'primary-active': 'rgba(25, 80, 138, 1)',
    'primary-foreground': 'rgba(255, 255, 255, 1)',

    secondary: 'rgba(246, 246, 246, 1)',
    'secondary-active': 'rgba(237, 238, 240, 1)',
    'secondary-foreground': 'rgba(0, 0, 0, 1)',

    input: 'rgba(255, 255, 255, 1)',
    'input-foreground': 'rgba(0, 0, 0, 1)',

    destructive: '#DB1846',
    'destructive-active': '#BA0933',
    'destructive-foreground': 'rgba(255, 255, 255, 1)',

    warning: '#FFAF38',

    success: '#009674',
    'success-foreground': 'rgba(255, 255, 255, 1)',

    border: 'rgba(213, 214, 215, 1)',
    // keep hex for ui-toggle web lib
    ring: '#8c9eb3',
  },
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      Object.keys(theme.colors).forEach(colorName => {
        document.documentElement.style.setProperty(
          `--${colorName}`,
          theme.colors[colorName as keyof typeof theme.colors],
        );
      });
    }
  }, []);

  const themeVariables = useMemo(() => vars(theme.colors), []);

  return (
    <ThemeContext.Provider value={theme}>
      <UIView className="flex-1" style={themeVariables}>
        {children}
      </UIView>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return ctx;
};

export const useThemeColor = <T extends ThemeColor | undefined>(color: T): T extends undefined ? undefined : string => {
  const { colors } = useTheme();

  if (!color) {
    // @ts-expect-error
    return undefined;
  }

  // @ts-expect-error
  return colors[color as keyof Theme['colors']] ?? color;
};
