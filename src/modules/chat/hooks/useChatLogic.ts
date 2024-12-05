import { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import UUID from 'react-native-uuid';

/** Custom dependencies **/
import { Message } from '../interfaces';

const PAGE_SIZE = 50;

/**
 * Hook to manage chat message logic.
 * This hook handles the logic for sending new messages, loading more messages, and formatting timestamps.
 * It provides the necessary state, functions, and references to manage the message list and user input.
 * 
 * @hook
 * @example
 * // Example usage:
 * const { displayedMessages, inputValue, handleSend, loadMoreMessages, flatListRef } = useChatLogic(conversation);
 * 
 * @param {Message[]} conversation - The initial list of messages in the conversation.
 * @returns The hook's values and functions.
 */
const useChatLogic = (conversation: Message[]) => {
    /** State to hold the messages that will be displayed in the chat */
    const [displayedMessages, setDisplayedMessages] = useState<Message[]>(conversation.slice(0, PAGE_SIZE));

    /** State to hold the current input value in the chat input field */
    const [inputValue, setInputValue] = useState('');

    /** Reference to the FlatList component for controlling scroll position */
    const flatListRef = useRef<FlatList>(null);

    /**
     * Handles sending a new message.
     * This function creates a new message object with a unique ID and adds it to the displayed messages.
     * It then clears the input field and scrolls the chat to the top.
     * 
     * @function
     */
    const handleSend = () => {
        // Ensure the input value is not empty
        if (inputValue.trim() !== '') {
            const newMessage: Message = {
                id: UUID.v4(), // Use UUID to generate a unique message ID
                content: inputValue.trim(),
                isMine: true,
                timestamp: new Date(),
                readed: false,
            };

            // Add the new message to the top of the displayed messages
            setDisplayedMessages((prevMessages) => [newMessage, ...prevMessages]);
            setInputValue('');

            // Scroll the FlatList to the top
            flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
        }
    };

    /**
     * Loads more messages when the user scrolls to the top.
     * This function checks if there are more messages to load and appends them to the displayed list.
     * 
     * @function
     */
    const loadMoreMessages = () => {
        // Check if there are more messages to load
        if (displayedMessages.length < conversation.length) {
            const nextMessages = conversation.slice(
                displayedMessages.length,
                displayedMessages.length + PAGE_SIZE
            );

            // Add the next set of messages to the displayed messages
            setDisplayedMessages((prevMessages) => [...prevMessages, ...nextMessages]);
        }
    };

    return {
        displayedMessages,
        inputValue,
        setInputValue,
        handleSend,
        loadMoreMessages,
        flatListRef,
    };
};

export { useChatLogic };
