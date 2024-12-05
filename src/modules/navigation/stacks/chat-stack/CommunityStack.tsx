import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/** Custom dependencies **/
import { CommunityScreen } from '../../../chat';
import { useThemeColors } from '../../../../configs';

/** Define the parameters of the routes */
type RootCommunityStackParams = {
    CommunityHome: undefined;
};

const Stack = createStackNavigator();

/**
 * StackNavigation to handle navigation between screens.
 * It uses createStackNavigator from @react-navigation/stack.
 *
 * @stack
 * @example
 * // Example usage:
 * <CommunityStack />
 *
 * @returns {JSX.Element} The rendered stack navigator component.
 */
const CommunityStack: React.FC = (): JSX.Element => {
    const themeColors = useThemeColors();

    return (
        <Stack.Navigator
            initialRouteName="CommunityHome"
            detachInactiveScreens={false}
            screenOptions={{
                headerStyle: {
                    backgroundColor: themeColors.primaryContainer,
                },
                headerTintColor: themeColors.onPrimaryContainer,
                headerPressColor: themeColors.primary,
                animation: 'none',
            }}
        >
            <Stack.Screen
                name="CommunityHome"
                component={CommunityScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export { RootCommunityStackParams, CommunityStack };
