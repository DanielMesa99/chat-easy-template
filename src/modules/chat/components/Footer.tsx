import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { BaseProps } from '../../../common';
import { colorClass } from '../../../configs';

/**
 * Footer renders a footer section with message about encryption.
 * Displays a lock icon and a message indicating end-to-end encryption.
 *
 * @component
 * @example
 * // Example usage:
 * <Footer t={t} />
 *
 * @param {BaseProps} props - The properties for the Footer component including localization.
 * @returns {JSX.Element} The footer component containing message about encryption type.
 */
const Footer: React.FC<BaseProps> = React.memo(
  ({ t }: BaseProps): JSX.Element => {
    // Get NativeWind classes for theme colors
    const { on_bg, primary } = colorClass;

    return (
      <View className="flex-row justify-center h-28 mt-3">
        <Text className={`${on_bg}`}>
          <Ionicons name={'lock-closed'} size={16} className="mt-1" />
        </Text>
        <Text className={`ml-3 text-center ${on_bg}`}>
          {t('chat_list.encrypted')}{' '}
          <Text className={`${primary}`}>
            {t('chat_list.end_to_end')}
          </Text>
        </Text>
      </View>
    );
  },
);

export { Footer };
