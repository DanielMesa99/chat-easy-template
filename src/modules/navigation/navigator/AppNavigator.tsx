import React from 'react';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';

/** Custom dependencies **/
import { GlobalProvider } from '../../../configs';
import { MainDrawer } from '../tabs';

/**
 * AppNavigator component handles the main navigation flow of the app.
 *
 * @navigator
 * @example
 * // Example usage:
 * <AppNavigator />
 *
 * @returns {JSX.Element} The main navigation structure.
 */
const AppNavigator: React.FC = (): JSX.Element => {
    const { colorScheme } = useColorScheme();

    return (
        <GlobalProvider>
            <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
            <MainDrawer />
        </GlobalProvider>
    );
};

export { AppNavigator };
