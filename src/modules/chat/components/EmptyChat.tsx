import React from 'react';
import { View, Text } from 'react-native';

/** Custom dependencies **/
import { BaseProps } from '../../../common';

/**
 * Interface for the EmptyChat component props.
 * Defines the properties passed to the EmptyChat like the type of message to display
 *
 * @interface EmptyChatProps
 */
interface EmptyChatProps {
  type: 'chat' | 'group';
}

/**
 * EmptyChat renders a message when lists are empty.
 * The type of the message depends of props and could be chat or group
 *
 * @component
 * @example
 * // Example usage:
 * <EmptyChat t={t} type='chat' />
 *
 * @param {BaseProps & EmptyChatProps} props - The properties for the EmptyChat component like type and localization.
 * @returns {JSX.Element} The empty chat component containing messages for the user.
 */
const EmptyChat: React.FC<BaseProps & EmptyChatProps> = React.memo(
  ({ t, type }: BaseProps & EmptyChatProps): JSX.Element => {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-light-onBackground dark:text-dark-onBackground">
          {type === 'chat'
            ? t('chat_list.empty_chat')
            : t('chat_list.empty_group')}
        </Text>
        <Text className="mt-3 text-center text-light-onBackground dark:text-dark-onBackground">
          {type === 'chat' ? t('chat_list.new_chat') : t('chat_list.new_group')}
        </Text>
      </View>
    );
  },
);

export { EmptyChat };
