import React, { createContext, useState, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/** Custom dependencies **/
import { i18n } from '../i18n';

/**
 * Props for the GlobalContext.
 */
interface GlobalContextProps {
  isScrollingDown: boolean;
  setIsScrollingDown: (scrolling: boolean) => void;
}

/**
 * Context to provide global values and functions.
 */
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

/**
 * GlobalProvider is a context component that aggregates multiple providers
 * for managing state, and localization in the app.
 *
 * @context
 * @example
 * // Example usage:
 * <GlobalProvider>
 *   <App />
 * </GlobalProvider>
 *
 * @returns {JSX.Element} - The combined providers wrapping the children components.
 */
const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  return (
    <GlobalContext.Provider value={{ isScrollingDown, setIsScrollingDown }}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </NavigationContainer>
      </I18nextProvider>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext, GlobalContextProps };
