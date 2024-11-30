import React from 'react';
import { View } from 'react-native';
import { ChatListScreen } from './ChatListScreen';

const ChatScreen: React.FC = (): JSX.Element => {
  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      <ChatListScreen />
    </View>
  );
};

export { ChatScreen };
