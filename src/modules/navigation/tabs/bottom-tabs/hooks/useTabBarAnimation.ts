import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

/**
 * The type for the return value of the useTabBarAnimation hook.
 * This type defines the animated values for the icon scale, text scale, and text opacity.
 *
 * @interface TabBarAnimation
 */
export interface TabBarAnimation {
  scaleIconAnim: Animated.Value;
  scaleTextAnim: Animated.Value;
  opacityTextAnim: Animated.Value;
}

/**
 * Hook to manage animations for the TabBar icons and text.
 *
 * This hook provides animations for scaling the icon and text, as well as controlling the opacity
 * of the text when a tab is focused or not. These animations make the tab bar more interactive and visually appealing.
 *
 * @hook
 * @example
 * // Example usage:
 * const { scaleIconAnim, scaleTextAnim, opacityTextAnim } = useTabBarAnimation(isFocused);
 *
 * @param isFocused - A boolean indicating whether the tab is focused or not.
 * @returns {TabBarAnimation} The animated values for the icon scale, text scale, and text opacity.
 */
const useTabBarItemAnimation = (isFocused: boolean): TabBarAnimation => {
  /* Create references to hold the animated values for icon scale, text scale, and text opacity */
  const scaleIconAnim = useRef(new Animated.Value(isFocused ? 0.9 : 1)).current;
  const scaleTextAnim = useRef(new Animated.Value(isFocused ? 1 : 0.8)).current;
  const opacityTextAnim = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  useEffect(() => {
    /* Animation for the icon scale when the tab is focused or not */
    Animated.timing(scaleIconAnim, {
      toValue: isFocused ? 0.9 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();

    /* Animation for the text scale when the tab is focused or not */
    Animated.timing(scaleTextAnim, {
      toValue: isFocused ? 1 : 0.8,
      duration: 350,
      useNativeDriver: true,
    }).start();

    /* Animation for the text opacity when the tab is focused or not */
    Animated.timing(opacityTextAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  return { scaleIconAnim, scaleTextAnim, opacityTextAnim };
};

/**
 * Hook to handle the animation of the TabBar based on the scroll direction.
 * It calculates the translateY value and returns the animated style to apply on the TabBar.
 *
 * @hook
 * @example
 * // Example usage:
 * const animatedStyle = useTabBarAnimation(isScrollingDown, animateBar);
 *
 * @param {boolean} isScrollingDown - Indicates whether the user is scrolling down.
 * @returns The animated style to be applied to the TabBar.
 */
const useTabBarAnimation = (isScrollingDown: boolean) => {
  /**
   * Update animation based on scroll direction.
   * Effect to update the tabBarTranslateY value based on the scrolling direction.
   */
  const derivedTranslateY = useDerivedValue(() => {
    return isScrollingDown
      ? withTiming(250, { duration: 400 })
      : withTiming(0, { duration: 400 });
  });

  /**
   * Define the animated style for the TabBar.
   * Animated style that applies the translateY transformation to the TabBar.
   */
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: derivedTranslateY.value }],
      zIndex: 1, // Ensure it's interactive when visible
    };
  });

  return animatedStyle;
};

export { useTabBarAnimation, useTabBarItemAnimation };
