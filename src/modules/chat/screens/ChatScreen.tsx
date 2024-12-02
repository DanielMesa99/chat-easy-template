import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
/** Custom dependencies **/

interface Message {
  id: string;
  content: string;
  isMine: boolean;
  timestamp: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hola, ¿cómo estás?',
      isMine: false,
      timestamp: '2024-12-01T10:00:00Z',
    },
    {
      id: '2',
      content: 'Bien, ¿y tú?',
      isMine: true,
      timestamp: '2024-12-01T10:01:00Z',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      const newMessage: Message = {
        id: `${messages.length + 1}`,
        content: inputValue,
        isMine: true,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            className={`flex-row ${item.isMine ? 'justify-end' : 'justify-start'} m-2`}
          >
            <View
              className={`p-3 rounded-lg ${item.isMine ? 'bg-light-primary dark:bg-dark-primary' : 'bg-gray-300'}`}
            >
              <Text className="text-lg text-light-onPrimary dark:text-dark-onPrimary">
                {item.content}
              </Text>
            </View>
          </View>
        )}
        inverted
      />
      <View className="flex-row items-center px-4 py-2 border-t border-light-line dark:border-dark-line">
        <TextInput
          className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-5 text-light-onBackground dark:text-dark-onBackground"
          placeholder="Escribe un mensaje"
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity
          onPress={handleSend}
          className="ml-2 rounded-lg p-4 bg-light-primary dark:bg-dark-primary"
        >
          <Text className="text-light-onPrimary dark:text-dark-onPrimary">
            <Ionicons name="send" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ChatScreen };
