import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

/** Custom dependencies **/
import { TabBarItem } from './TabBarItem';
import { useTabBarAnimation } from '../hooks';
import { colorClass } from '../../../../../configs';

/**
 * Interface for the TabBar component props.
 * Defines the properties passed to the TabBar, including the scroll state of the user.
 *
 * @interface TabBarProps
 */
interface TabBarProps {
  isScrollingDown: boolean;
}

/**
 * TabBar component renders the bottom navigation bar with animated icons and labels.
 * It maps over the routes and renders a TabBarItem for each route, along with an animated add button.
 *
 * The TabBar also animates when the user scrolls down to hide it and when scrolling up to bring it back.
 *
 * @component
 * @example
 * // Example usage:
 * <TabBar {...props} isScrollingDown={isScrollingDown} />
 *
 * @param {MaterialTopTabBarProps & TabBarProps} props - The props passed from the MainBottom navigation.
 * @returns {React.JSX.Element} The bottom tab bar with animations.
 */
const TabBar: React.FC<MaterialTopTabBarProps & TabBarProps> = React.memo(
  ({
    state,
    descriptors,
    navigation,
    isScrollingDown,
  }: MaterialTopTabBarProps & TabBarProps): React.JSX.Element | null => {
    // Retrieve animations for the icon and text
    const animatedStyle = useTabBarAnimation(isScrollingDown);

    // Get NativeWind classes for theme colors
    const { primary_full, on_primary, bg_primary } = colorClass;

    return (
      <Animated.View style={[animatedStyle]} className="self-center w-11/12">
        <View className={`absolute self-end bottom-28 rounded-full ${primary_full}`}>
          <TouchableOpacity
            className={`p-5 rounded-full elevation ${primary_full}`}
            onPress={() => { }}
            activeOpacity={0.7}
          >
            <Text className={`${on_primary}`}>
              <Ionicons name={'add'} size={26} />
            </Text>
          </TouchableOpacity>
        </View>
        <View className={`absolute bottom-5 flex-row h-20 w-full px-3 items-center rounded-2xl elevation ${bg_primary}`}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              typeof options.tabBarLabel === 'string'
                ? options.tabBarLabel
                : (options.title ?? route.name);
            const isFocused = state.index === index;

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
      </Animated.View>
    );
  },
);

export { TabBar };
