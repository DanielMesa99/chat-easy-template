import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/** Custom dependencies **/
import { ChatHomeScreen, ChatScreen } from '../../../chat';
import { useThemeColors } from '../../../../configs';

/** Define the parameters of the routes */
type RootStackParams = {
  ChatHome: undefined;
  ChatView: { id: string; name: string };
};

const Stack = createStackNavigator();

/**
 * StackNavigation to handle navigation between screens.
 * It uses createStackNavigator from @react-navigation/stack.
 *
 * @stack
 * @example
 * // Example usage:
 * <ChatStack />
 *
 * @returns {JSX.Element} The rendered stack navigator component.
 */
const ChatStack: React.FC = (): JSX.Element => {
  const themeColors = useThemeColors();

  return (
    <Stack.Navigator
      initialRouteName="ChatHome"
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
        name="ChatHome"
        component={ChatHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ChatView" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export { ChatStack, RootStackParams };
