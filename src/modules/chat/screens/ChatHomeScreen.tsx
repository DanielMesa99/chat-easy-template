import React, { useState } from 'react';
import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/** Custom dependencies **/
import { ChatItem, EmptyChat, Footer } from '../components';
import { chats } from '../data';
import { useGlobalContext } from '../../../configs';
import { RootChatStackParams } from '../../navigation';
import { Chat } from '../interfaces';

/* Define the navigation type for the ChargeScreen */
type ChatScreenNavigationProp = StackNavigationProp<
  RootChatStackParams,
  'ChatHome'
>;

/**
 * ChatHomeScreen renders a list of chat items.
 * It displays a list of chat conversations with their relevant details like last message,
 * unread messages, and the timestamp. If there are no chats, it shows a placeholder message.
 *
 * The component handles scroll events to determine the scrolling direction and updates
 * the global state (isScrollingDown) accordingly.
 *
 * @screen
 * @example
 * // Example usage:
 * <ChatHomeScreen />
 *
 * @returns {JSX.Element} The main chat screen containing either a list of chats or a placeholder message.
 */
const ChatHomeScreen: React.FC = (): JSX.Element => {
  // State to store the list of chats
  const [chatState, setChatState] = useState<Chat[]>(chats);
  // State to track the scroll position for detecting the scroll direction
  const [scrollPosition, setScrollPosition] = useState(0);
  // Translation hook for handling internationalization
  const { t } = useTranslation();
  // Global context hook to set the scroll direction in the app context
  const { isScrollingDown, setIsScrollingDown } = useGlobalContext();

  const navigation = useNavigation<ChatScreenNavigationProp>();

  const handlePress = (id: string, name: string) => {
    navigation.navigate('ChatView', { id, name });
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
    if (
      (direction === 'down' && !isScrollingDown) ||
      (direction === 'up' && isScrollingDown)
    ) {
      setIsScrollingDown(direction === 'down'); // Update the scroll direction in the global context
    }
    setScrollPosition(currentOffset);
  };

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      {chatState.length === 0 ? (
        /* Show a message if there are no chats */
        <EmptyChat t={t} type="chat" />
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
              onPress={() => handlePress(item.id, item.name)}
            />
          )}
          onScroll={handleScroll}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          ListFooterComponent={
            /* Footer displaying information about encryption */
            <Footer t={t} />
          }
        />
      )}
    </View>
  );
};

export { ChatHomeScreen };
