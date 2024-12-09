import React from 'react';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { ImageBackground, View } from 'react-native';

/** Custom dependencies **/
import { DrawerItem } from './DrawerItem';
import { IconName, LanguageSwitcher, ThemeSwitcher } from '../../../../../common';
import { colorClass } from '../../../../../configs';

/**
 * Map of route names to icon names.
 * This object maps the name of the route to the corresponding icon to display in the Drawer.
 *
 * @type {Object<string, string>}
 */
const iconMap: { [key: string]: string } = {
  Home: 'home',
  Profile: 'person',
  Contacts: 'people',
  Calls: 'call',
  SavedMessages: 'bookmark',
  Settings: 'settings',
};

/**
 * Props for the DrawerContent component.
 * This component extends DrawerContentComponentProps from React Navigation to access the navigation state and methods.
 *
 * @extends {DrawerContentComponentProps}
 */
interface DrawerContentProps extends DrawerContentComponentProps { }

/**
 * DrawerContent component that renders the content of the drawer (navigation menu).
 *
 * This component uses a `DrawerContentScrollView` to make the content scrollable.
 * It maps over the routes in the drawer's navigation state and displays a `DrawerItem` for each route.
 * The `DrawerItem` displays the route's label, icon, and handles navigation when pressed.
 *
 * @component
 * @example
 * // Example usage:
 * <TabBarItem
 *     key={route.key}
 *     route={route}
 *     label={label}
 *     isFocused={isFocused}
 *     onPress={onPress}
 * />
 *
 * @param {DrawerContentProps} props - The props for this component.
 * @returns {JSX.Element} The scrollable list of drawer items.
 */
const DrawerContent: React.FC<DrawerContentProps> = React.memo(
  (props: DrawerContentProps): JSX.Element => {
    // Get NativeWind classes for theme colors
    const { border_active } = colorClass;

    return (
      <DrawerContentScrollView {...props}>
        <ImageBackground imageStyle={{ borderRadius: 10 }} source={require('../../../../../common/assets/images/user.jpg')} className='h-40 w-full mb-5' />
        {props.state.routes.map((route, index) => {
          const focused = props.state.index === index;
          const onPress = () => props.navigation.navigate(route.name);
          const iconName = iconMap[route.name] as IconName;

          return (
            <DrawerItem
              key={route.key}
              label={props.descriptors[route.key].options.title || route.name}
              onPress={onPress}
              focused={focused}
              iconName={iconName}
            />
          );
        })}
        <View className={`border-t ${border_active}`}>
          <View className="flex-row justify-between items-center mt-5">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  },
);

export { DrawerContent };
