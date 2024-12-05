import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { BaseProps } from '../../../common';

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
    return (
      <View className="flex-row justify-center h-28 mt-3">
        <Text className="text-light-onBackground dark:text-dark-onBackground">
          <Ionicons name={'lock-closed'} size={16} className="mt-1" />
        </Text>
        <Text className="ml-3 text-center text-light-onBackground dark:text-dark-onBackground">
          {t('chat_list.encrypted')}{' '}
          <Text className="color-light-primary dark:color-dark-primary">
            {t('chat_list.end_to_end')}
          </Text>
        </Text>
      </View>
    );
  },
);

export { Footer };
