import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { TabBarItem } from './TabBarItem';

/**
 * The TabBar component renders the top navigation bar with animated icons and labels.
 * It maps over the routes and renders a TabBarItem for each route.
 *
 * @component
 * @example
 * // Example usage:
 * <TabBar {...props} />
 *
 * @param {MaterialTopTabBarProps} props - The props passed from the top tab navigation.
 * @returns {React.JSX.Element} The bottom tab bar with animations.
 */
const TabBar: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps): React.JSX.Element => {
  return (
    <>
      <View className="mr-5">
        <TouchableOpacity
          className="absolute bottom-28 self-end sm:mr-16 md:mr-28 lg:mr-64 p-5 rounded-full elevation bg-light-primary dark:bg-dark-primary"
          onPress={() => {}}
          activeOpacity={0.7}
        >
          <Text className={'text-light-onPrimary dark:text-dark-onPrimary'}>
            <Ionicons name={'add'} size={26} />
          </Text>
        </TouchableOpacity>
      </View>
      <View className="absolute bottom-5 self-center flex-row h-20 w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 px-3 items-center rounded-2xl elevation bg-light-primaryContainer dark:bg-dark-primaryContainer">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          /* Ensure that label is a string (either from tabBarLabel, title, or route name) */
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : (options.title ?? route.name);
          const isFocused = state.index === index;

          /* Navigate when the tab is pressed */
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TabBarItem
              key={route.key}
              route={route}
              label={label}
              isFocused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </>
  );
};

export { TabBar };
