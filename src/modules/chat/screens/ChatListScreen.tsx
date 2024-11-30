import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

/** Custom dependencies */
import { ChatItem } from '../components';
import { Chat, chats } from '../data';

const ChatListScreen: React.FC = (): JSX.Element => {
  const [chatState, setChatState] = useState<Chat[]>(chats);
  const { t } = useTranslation();

  const handlePress = (id: string) => {
    console.log('Pressed chat with id:', id);
  };

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      {chatState.length === 0 ? (
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
          ListFooterComponent={
            <View className="flex-row justify-center h-56 mt-3">
              <Text
                className={
                  'text-light-onBackground dark:text-dark-onBackground'
                }
              >
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

export { ChatListScreen };
