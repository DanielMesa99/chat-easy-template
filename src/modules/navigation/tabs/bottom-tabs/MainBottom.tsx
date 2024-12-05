import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

/** Custom dependencies **/
import { TabBar } from './components';
import { StorieScreen } from '../../../storie';
import { CallScreen } from '../../../call';
import { useGlobalContext } from '../../../../configs';
import { ChatStack, CommunityStack } from '../../stacks';

/**
 * createMaterialTopTabNavigator is used in MainBottom to leverage its native swipeable tab functionality,
 * even though the tabs are positioned at the bottom.
 */
const Tab = createMaterialTopTabNavigator();

/**
 * The MainBottom navigator renders a bottom tab navigator with a custom tab bar.
 * It defines the screens for Chats, Stories, Communities, and Calls, each of which renders a corresponding component.
 * The TabBar handles its own visibility and animation based on the scroll direction.
 *
 * @tab
 * @example
 * // Example usage:
 * <MainBottom />
 *
 * @returns {React.JSX.Element} The bottom tab navigation with custom TabBar.
 */
const MainBottom: React.FC = (): React.JSX.Element => {
  // Translates the i18n keys into localized strings
  const { t } = useTranslation();
  // Global context hook to get the current scrolling state (scrolling down or not)
  const { isScrollingDown } = useGlobalContext();

  const shouldHideTabBar = (route: any): boolean => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Chats';
    return routeName === 'ChatView';
  };

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarPosition="bottom"
      tabBar={props => {
        return !shouldHideTabBar(props.state.routes[props.state.index]) ? (
          <TabBar {...props} isScrollingDown={isScrollingDown} />
        ) : null;
      }}
      screenOptions={({ route }) => ({
        lazy: true,
        lazyPlaceholder: () => (
          /* Show a loading spinner while the screen is loading */
          <ActivityIndicator size="large" color="#f9fafe" />
        ),
        animationEnabled: false,
        swipeEnabled: !shouldHideTabBar(route),
      })}
    >
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{ title: t('menu.chats') }}
      />
      <Tab.Screen
        name="Stories"
        component={StorieScreen}
        options={{ title: t('menu.stories') }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityStack}
        options={{ title: t('menu.communities') }}
      />
      <Tab.Screen
        name="Calls"
        component={CallScreen}
        options={{ title: t('menu.calls') }}
      />
    </Tab.Navigator>
  );
};

export { MainBottom };
