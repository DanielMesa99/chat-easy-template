import React from 'react';
import { View, Text } from 'react-native';

/** Custom dependencies **/
import { BaseProps } from '../../../../../common';
import { getKeyForRoute } from '../helpers';
import { colorClass } from '../../../../../configs';

/**
 * The interface for the props of the HeaderTitle component.
 * This interface defines the route passed to the header title.
 *
 * @interface HeaderTitleProps
 */
interface HeaderTitleProps {
  route: string | undefined;
}

/**
 * HeaderTitle component that show the name of the route in the header.
 *
 * @component
 * @example
 * // Example usage:
 * <HeaderTitle route={routes} />
 *
 * @param {HeaderTitleProps & BaseProps} props - The props for this component like the current route.
 * @returns {JSX.Element} - The name of the route as title for the header.
 */
const HeaderTitle: React.FC<HeaderTitleProps & BaseProps> = React.memo(
  ({ route, t }: HeaderTitleProps & BaseProps): JSX.Element => {
    // Get NativeWind classes for theme colors
    const { on_bg } = colorClass;

    const key = getKeyForRoute(route);

    return (
      <View>
        <Text className={`font-bold text-2xl ${on_bg}`}>
          {key ? t(`header_title.${key}`) : ''}
        </Text>
      </View>
    );
  },
);

export { HeaderTitle };
