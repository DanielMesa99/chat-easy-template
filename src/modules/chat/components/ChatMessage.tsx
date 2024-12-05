import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { Message } from '../interfaces';

/**
 * The interface for the props of the ChatMessage component.
 * Message details such as content, sender, and timestamp. 
 * Indicates whether the previous message was sent by the same user.
 * A function to format the timestamp into a readable string.
 * 
 * @type {ChatMessageProps}
 */
interface ChatMessageProps {
    item: Message;
    isSameSender: boolean;
    getFormattedTime: (date: Date) => string;
}

/**
 * ChatMessage component for rendering a single message in a chat UI.
 * 
 * @component
 * @example
 * // Example usage:
 * <ChatMessage
 *   item={item}
 *   isSameSender={isSameSender}
 *   getFormattedTime={getFormattedTime}
 * />
 * 
 * @param {ChatMessageProps} props - The props for the component like message details.
 * @returns {JSX.Element} A styled chat message.
 */
const ChatMessage: React.FC<ChatMessageProps> = React.memo(
    ({ item, isSameSender, getFormattedTime }) => {
        const containerClass = `flex-row ${item.isMine ? 'justify-end' : 'justify-start'
            } ${isSameSender ? 'm-2 mt-0' : 'm-2'}`;

        const bubbleClass = `p-2 rounded-lg ${item.isMine
            ? 'ml-5 bg-light-primary dark:bg-dark-primary'
            : 'mr-5 bg-light-secondary dark:bg-dark-secondary'
            }`;

        return (
            <View className={containerClass}>
                <View className={bubbleClass}>
                    <Text className="text-lg text-light-onPrimary dark:text-dark-onPrimary">
                        {item.content}
                    </Text>
                    <View className="flex-row justify-end items-center">
                        {item.isMine && (
                            <Text className='text-light-details dark:text-dark-details'>
                                <Ionicons
                                    name={item.readed ? 'checkmark-done' : 'checkmark'}
                                    size={12}
                                />
                            </Text>
                        )}
                        <Text className="text-xs ml-1 text-light-details dark:text-dark-details">
                            {getFormattedTime(item.timestamp)}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
);
export { ChatMessage };
