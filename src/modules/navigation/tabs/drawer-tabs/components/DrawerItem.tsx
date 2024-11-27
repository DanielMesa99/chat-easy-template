import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { IconName } from '../../../../../common';

/**
 * The interface for the props of the DrawerItem component.
 * This interface defines the properties passed to each item, including the label, focus state, icon name, and onress function.
 *
 * @interface DrawerItemProps
 */
interface DrawerItemProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  focused: boolean;
  iconName: IconName;
}

/**
 * DrawerItem component that represents a item in a drawer with an icon and label.
 * It is wrapped with React.memo for performance optimization, ensuring the component only re-renders when its props change.
 *
 * @navigator
 * @example
 * // Example usage:
 * <DrawerItem
 *     key={route.key}
 *     label={props.descriptors[route.key].options.title || route.name}
 *     onPress={onPress}
 *     focused={focused}
 *     iconName={iconName}
 * />
 *
 * @param {DrawerItemProps} props - The props for this component.
 * @returns {JSX.Element} A clickable drawer item with an icon and label.
 */
const DrawerItem: React.FC<DrawerItemProps> = React.memo(
  ({ label, onPress, focused, iconName }): React.JSX.Element => {
    const iconToUse = focused ? iconName : (`${iconName}-outline` as IconName);

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          className={`flex-row items-center p-4 mb-3 rounded-lg ${focused ? 'bg-light-primary/20' : 'bg-transparent'}`}
        >
          <Text
            className={`mr-5 ${focused ? 'text-light-primary dark:text-dark-primary' : 'text-light-onBackground dark:text-dark-onBackground'}`}
          >
            <Ionicons name={iconToUse} size={24} />
          </Text>
          <Text
            className={
              focused
                ? 'text-light-primary dark:text-dark-primary'
                : 'text-light-onBackground dark:text-dark-onBackground'
            }
          >
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

export { DrawerItem };
