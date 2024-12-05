import React from 'react';
import { View, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

/** Custom dependencies **/
import { conversation } from '../data';
import { useThemeColors } from '../../../configs';
import { useChatLogic } from '../hooks';
import { ChatBar, ChatMessage } from '../components';
import { getFormattedTime } from '../helpers';

/**
 * ChatScreen where user can send and view messages.
 * 
 * @screen
 * @example
 * // Example usage:
 * <ChatScreen />
 * 
 * @returns {JSX.Element} The rendered ChatScreen with list of messages and chat bar.
 */
const ChatScreen: React.FC = (): JSX.Element => {
  const themeColors = useThemeColors();
  const { t } = useTranslation();

  const {
    displayedMessages,
    inputValue,
    setInputValue,
    handleSend,
    loadMoreMessages,
    flatListRef
  } = useChatLogic(conversation);

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      <FlatList
        data={displayedMessages}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isSameSender =
            index < displayedMessages.length - 1 &&
            displayedMessages[index + 1]?.isMine === item.isMine;

          return (
            <ChatMessage
              item={item}
              isSameSender={isSameSender}
              getFormattedTime={getFormattedTime}
            />
          );
        }}
        inverted
        onEndReached={loadMoreMessages}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<View className="h-28" />}
      />
      <ChatBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSend={handleSend}
        themeColors={themeColors}
        t={t}
      />
    </View>
  );
};

export { ChatScreen };
