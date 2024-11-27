import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

/** Custom dependencies **/
import { TabBar } from './components';
import { ChatScreen } from '../../../chat';
import { StorieScreen } from '../../../storie';
import { CommunityScreen } from '../../../community';
import { CallScreen } from '../../../call';

/**
 * createMaterialTopTabNavigator is used in MainBottom to leverage its native swipeable tab functionality,
 * even though the tabs are positioned at the bottom.
 */
const Tab = createMaterialTopTabNavigator();

/**
 * The MainBottom navigator renders a bottom tab navigator with a custom tab bar.
 * It defines the screens for Chats, Stories, Communities, and Calls, each of which renders a corresponding component.
 * The TabBar component is used to render custom tab bar navigation with animated icons and labels.
 *
 * @tab
 * @example
 * // Example usage:
 * <MainBottom />
 *
 * @returns {React.JSX.Element} The bottom tab navigation with custom TabBar.
 */
const MainBottom: React.FC = (): React.JSX.Element => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarPosition="bottom"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => (
          <ActivityIndicator
            size="large"
            className="color-light-primary dark:color-dark-primary"
          />
        ),
        animationEnabled: false,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{ title: t('menu.chats') }}
      />
      <Tab.Screen
        name="Stories"
        component={StorieScreen}
        options={{ title: t('menu.stories') }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
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
