import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';

/** Custom dependencies **/
import { MainBottom } from '../bottom-tabs';
import { DrawerContent, HeaderRight, HeaderTitle } from './components';
import { useThemeColors } from '../../../../configs';
import { SettingScreen } from '../../../setting';
import { getActiveRouteName, getKeyForRoute } from './helpers';

/**
 * createDrawerNavigator is used in MainDrawer to sets up the drawer navigation.
 */
const Drawer = createDrawerNavigator();

/**
 * MainDrawer component that sets up the drawer navigation and header.
 * It displays a side menu with the Home and Profile screens and a custom header with action buttons (camera, search, settings).
 *
 * @tab
 * @example
 * // Example usage:
 * <MainDrawer />
 *
 * @returns {JSX.Element} - Drawer Navigator with custom header and content.
 */
const MainDrawer: React.FC = (): JSX.Element => {
  const themeColors = useThemeColors();
  // Translates the i18n keys into localized strings
  const { t } = useTranslation();

  /**
   * Handler for the camera button press.
   */
  const handleCameraPress = () => {
    console.log('Camera pressed');
  };

  /**
   * Handler for the search button press.
   */
  const handleSearchPress = () => {
    console.log('Search pressed');
  };

  /**
   * Handler for the settings button press.
   */
  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      detachInactiveScreens={false} // this fix flicker issues
      defaultStatus='closed'
      screenOptions={({ navigation }) => {
        const routeKey = getKeyForRoute(getActiveRouteName(navigation.getState()));

        return {
          drawerType: 'front',
          headerShadowVisible: true,
          headerShown: !!routeKey, // Show header only if routeKey is not ''
          drawerStyle: {
            backgroundColor: themeColors.primaryContainer,
          },
          headerStyle: {
            backgroundColor: themeColors.primaryContainer,
          },
          headerTintColor: themeColors.onPrimaryContainer,
          headerRight: () => (
            <HeaderRight
              onCameraPress={handleCameraPress}
              onSearchPress={handleSearchPress}
              onSettingsPress={handleSettingsPress}
            />
          ),
          headerTitle: () => (
            <HeaderTitle route={getActiveRouteName(navigation.getState())} t={t} />
          ),
        };
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={MainBottom}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={SettingScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export { MainDrawer };
