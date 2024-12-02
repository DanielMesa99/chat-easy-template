import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { formatDate } from '../../../common';

/**
 * Interface for the ChatItem component props.
 * Defines the properties passed to the ChatItem, including id, name, lastMessage, etc. of the chat.
 *
 * @interface ChatItemProps
 */
interface ChatItemProps {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatarUrl: string;
  lastMessageIsMine: boolean;
  lastMessageRead: boolean;
  onPress: () => void;
}

/**
 * ChatItem component renders a preview of a chat with various details like date and lastMessage.
 *
 * @component
 * @example
 * // Example usage:
 * <ChatItem
 *   id="1"
 *   name="John Doe"
 *   lastMessage="Hello there!"
 *   timestamp="2024-12-01T09:57:00Z"
 *   unread={true}
 *   avatarUrl="https://example.com/avatar.jpg"
 *   lastMessageIsMine={true}
 *   lastMessageRead={false}
 *   onPress={(id) => console.log(id)}
 * />
 *
 * @param {ChatItemProps} props - The properties for the ChatItem component.
 * @returns {React.ReactElement} The rendered chat item.
 */
const ChatItem: React.FC<ChatItemProps> = ({
  id,
  name,
  lastMessage,
  timestamp,
  unread,
  avatarUrl,
  lastMessageIsMine,
  lastMessageRead,
  onPress,
}: ChatItemProps): React.ReactElement => {
  return (
    <TouchableOpacity
      className="flex-row items-center h-24 p-4 mx-1 border-b border-light-line dark:border-dark-line"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Image
        source={{ uri: avatarUrl }}
        className="w-16 h-16 rounded-full mr-4 bg-light-primary dark:bg-dark-primary"
      />
      <View className="flex-1 justify-between">
        <View className="flex-row justify-between items-center w-full">
          <Text className="text-xl font-bold max-w-[70%] text-light-onBackground dark:text-dark-onBackground">
            {name}
          </Text>
          <Text className="text-xs color-light-sub dark:color-dark-sub">
            {formatDate(timestamp)}
          </Text>
        </View>
        <View className="flex-row justify-between items-center w-full">
          <View className="flex-row items-center max-w-[85%]">
            {lastMessageIsMine && (
              <Text className="text-lg mr-1 color-light-sub dark:color-dark-sub">
                <Ionicons
                  name={lastMessageRead ? 'checkmark-done' : 'checkmark'}
                  size={16}
                />
              </Text>
            )}
            <Text
              className="text-lg color-light-sub dark:color-dark-sub"
              numberOfLines={1}
            >
              {lastMessage}
            </Text>
          </View>
          {unread && <View className="w-2.5 h-2.5 rounded-full bg-red-500" />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { ChatItem };
