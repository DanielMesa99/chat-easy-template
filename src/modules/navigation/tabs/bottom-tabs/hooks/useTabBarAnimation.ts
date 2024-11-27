import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

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
const useTabBarAnimation = (isFocused: boolean): TabBarAnimation => {
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

export { useTabBarAnimation };
