import React from 'react';
import { Animated, Pressable, Text } from 'react-native';

/** Custom dependencies **/
import { useTabBarAnimation } from '../hooks';
import { BottomIconKeys, bottomIcons } from '../types';

/**
 * The interface for the props of the TabBarItem component.
 * This interface defines the properties passed to each tab item, including the route, focus state, label, and press handler.
 *
 * @interface TabBarItemProps
 */
interface TabBarItemProps {
  route: any;
  isFocused: boolean;
  label: string | undefined;
  onPress: () => void;
}

/**
 * Renders a single tab item with animations for the icon and label.
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
 * @param {TabBarItemProps} props - Props for the tab item, including route, label, and focus state.
 * @returns {React.JSX.Element} The tab item component with animations.
 */
const TabBarItem: React.FC<TabBarItemProps> = ({
  route,
  isFocused,
  label,
  onPress,
}: TabBarItemProps): React.JSX.Element => {
  /* Retrieve animations for the icon and text */
  const { scaleIconAnim, scaleTextAnim, opacityTextAnim } =
    useTabBarAnimation(isFocused);

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 justify-center items-center"
      accessibilityState={isFocused ? { selected: true } : {}}
    >
      {/* Animated Icon */}
      <Animated.View
        style={{
          transform: [{ scale: scaleIconAnim }],
        }}
      >
        {bottomIcons[route.name as BottomIconKeys]({
          isFocused,
        })}
      </Animated.View>

      {/* Animated Text */}
      {isFocused && label && (
        <Animated.Text
          style={{
            transform: [{ scale: scaleTextAnim }],
            opacity: opacityTextAnim,
          }}
          className={`text-sm`}
        >
          <Text
            className={
              isFocused
                ? 'text-light-primary dark:text-dark-primary'
                : 'text-light-onBackground dark:text-dark-onBackground'
            }
          >
            {label}
          </Text>
        </Animated.Text>
      )}
    </Pressable>
  );
};

export { TabBarItem };
