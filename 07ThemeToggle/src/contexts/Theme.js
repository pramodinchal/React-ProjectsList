import { createContext, useContext} from 'react';

// Creating Context by passing default values
export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})

// Create Provider in same file

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}