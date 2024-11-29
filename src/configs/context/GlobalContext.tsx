import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/** Custom dependencies **/
import { i18n } from '../i18n';

/**
 * GlobalProviderProps is a type that defines the properties for the GlobalProvider component.
 */
interface GlobalProviderProps {
  children: React.ReactNode;
}

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
 * @param {GlobalProviderProps} props - The props for the component.
 * @returns {JSX.Element} - The combined providers wrapping the children components.
 */
const GlobalProvider: React.FC<GlobalProviderProps> = ({
  children,
}: GlobalProviderProps): JSX.Element => {

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <SafeAreaProvider>
          {children}
        </SafeAreaProvider>
      </NavigationContainer>
    </I18nextProvider>
  );
};

export { GlobalProvider, GlobalProviderProps };
