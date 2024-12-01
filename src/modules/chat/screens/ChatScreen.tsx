import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

/** Custom dependencies **/
import { ChatItem } from '../components';
import { Chat, chats } from '../data';
import { useGlobalContext } from '../../../configs';

/**
 * ChatScreen renders a list of chat items.
 * It displays a list of chat conversations with their relevant details like last message,
 * unread messages, and the timestamp. If there are no chats, it shows a placeholder message.
 *
 * The component handles scroll events to determine the scrolling direction and updates
 * the global state (`isScrollingDown`) accordingly.
 *
 * @screen
 * @example
 * // Example usage:
 * <ChatScreen />
 *
 * @returns {JSX.Element} The main chat screen containing either a list of chats or a placeholder message.
 */
const ChatScreen: React.FC = (): JSX.Element => {
  // State to store the list of chats
  const [chatState, setChatState] = useState<Chat[]>(chats);
  // State to track the scroll position for detecting the scroll direction
  const [scrollPosition, setScrollPosition] = useState(0);
  // Translation hook for handling internationalization
  const { t } = useTranslation();
  // Global context hook to set the scroll direction in the app context
  const { setIsScrollingDown } = useGlobalContext();

  const handlePress = (id: string) => {
    console.log('Pressed chat with id:', id);
  };

  /**
   * Handles the scroll event for the chat list.
   * Detects the scroll direction (up or down) and updates the global state
   * to reflect whether the user is scrolling down.
   *
   * @param {NativeSyntheticEvent<NativeScrollEvent>} event - The native scroll event.
   */
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction =
      currentOffset < 10
        ? 'up'
        : currentOffset > scrollPosition
          ? 'down'
          : 'up';
    setIsScrollingDown(direction === 'down'); // Update the scroll direction in the global context
    setScrollPosition(currentOffset);
  };

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      {chatState.length === 0 ? (
        /** Show a message if there are no chats **/
        <View className="flex-1 justify-center items-center">
          <Text className="text-center text-light-onBackground dark:text-dark-onBackground">
            {t('chat_list.empty')}
          </Text>
          <Text className="mt-3 text-center text-light-onBackground dark:text-dark-onBackground">
            {t('chat_list.new_chat')}
          </Text>
        </View>
      ) : (
        <FlatList
          data={chatState}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ChatItem
              id={item.id}
              name={item.name}
              lastMessage={item.lastMessage}
              timestamp={item.timestamp}
              unread={item.unread}
              avatarUrl={item.avatarUrl}
              lastMessageIsMine={item.lastMessageIsMine}
              lastMessageRead={item.lastMessageRead}
              onPress={handlePress}
            />
          )}
          onScroll={handleScroll}
          ListFooterComponent={
            /** Footer displaying information about encryption **/
            <View className="flex-row justify-center h-56 mt-3">
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
          }
        />
      )}
    </View>
  );
};

export { ChatScreen };
