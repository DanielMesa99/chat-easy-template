import { createDrawerNavigator } from '@react-navigation/drawer';

/** Custom dependencies **/
import { MainBottom } from '../bottom-tabs';
import { ChatScreen } from '../../../chat';
import { DrawerContent, HeaderRight } from './components';
import { useThemeColors } from '../../../../configs';

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
 * @returns {JSX.Element} - Drawer Navigator with custom header and content
 */
const MainDrawer: React.FC = (): JSX.Element => {
  const themeColors = useThemeColors();

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
      screenOptions={{
        drawerType: 'front',
        headerShadowVisible: false,
        drawerStyle: {
          backgroundColor: themeColors.primaryContainer,
        },
        headerStyle: {
          backgroundColor: themeColors.background,
        },
        headerTintColor: themeColors.onBackground,
        headerRight: () => (
          <HeaderRight
            onCameraPress={handleCameraPress}
            onSearchPress={handleSearchPress}
            onSettingsPress={handleSettingsPress}
          />
        ),
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
        component={ChatScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export { MainDrawer };
