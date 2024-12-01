import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

/** Custom dependencies **/
import { TabBarItem } from './TabBarItem';

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
const TabBar: React.FC<
  MaterialTopTabBarProps & TabBarProps
> = ({
  state,
  descriptors,
  navigation,
  isScrollingDown,
}: MaterialTopTabBarProps & TabBarProps): React.JSX.Element => {
    // Shared value for controlling the vertical translation of the TabBar
    const tabBarTranslateY = useSharedValue(0);

    /**
     * Update animation based on scroll direction.
     * Effect to update the tabBarTranslateY value based on the scrolling direction.
     */
    React.useEffect(() => {
      tabBarTranslateY.value = withTiming(isScrollingDown ? 250 : 0, {
        duration: 400,
      });
    }, [isScrollingDown]);

    /**
     * Define the animated style for the TabBar.
     * Animated style that applies the translateY transformation to the TabBar.
     */
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: tabBarTranslateY.value }],
      zIndex: 1, // Adjust zIndex to avoid interaction when the bar is off-screen
    }));

    return (
      <Animated.View style={[animatedStyle]}>
        <View className="mr-5">
          <TouchableOpacity
            className="absolute bottom-28 self-end sm:mr-16 md:mr-28 lg:mr-64 p-5 rounded-full elevation bg-light-primary dark:bg-dark-primary"
            onPress={() => { }}
            activeOpacity={0.7}
          >
            <Text className={'text-light-onPrimary dark:text-dark-onPrimary'}>
              <Ionicons name={'add'} size={26} />
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[animatedStyle]}
          className="absolute bottom-5 self-center flex-row h-20 w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 px-3 items-center rounded-2xl elevation bg-light-primaryContainer dark:bg-dark-primaryContainer"
        >
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
  };

export { TabBar };
