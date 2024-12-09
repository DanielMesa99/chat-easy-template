import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/** Custom dependencies **/
import { BaseProps } from '../../../common';
import { colorClass } from '../../../configs';

/**
 * The interface for the props of the ChatBarProps component.
 * The current value of the input field.
 * A function to update the inputValue. This function is used to modify the state of the input field as the user types.
 * A function that is triggered when the user sends the message. This function handles the logic for sending the message,
 * such as updating the message list and clearing the input field.
 *
 * @type {ChatBarProps}
 */
interface ChatBarProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

/**
 * Chat bar component where user can type and send messages.
 *
 * @component
 * @example
 * // Example usage:
 * <ChatMessage
 *   inputValue={inputValue}
 *   setInputValue={setInputValue}
 *   handleSend={handleSend}
 * />
 *
 * @param {ChatBarProps & BaseProps} props - The props for the component.
 * @returns {JSX.Element} The rendered ChatBar component.
 */
const ChatBar: React.FC<ChatBarProps & BaseProps> = React.memo(
  ({
    inputValue,
    setInputValue,
    handleSend,
    t,
    themeColors,
  }: ChatBarProps & BaseProps): JSX.Element => {
    // Get NativeWind classes for theme colors
    const { bg_primary, on_primary_bg, primary_full, border_active } = colorClass;

    return (
      <View className={`absolute bottom-5 self-center flex-row h-20 w-11/12 items-center px-2 rounded-2xl elevation ${bg_primary}`}>
        <TextInput
          className={`flex-1 px-4 rounded-lg border-b ${on_primary_bg} ${border_active}`}
          placeholder={t('chat_screen.placeholder')}
          placeholderTextColor={themeColors?.sub}
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity
          onPress={handleSend}
          className={`ml-2 rounded-full p-4 ${primary_full}`}
          activeOpacity={0.7}
        >
          <Ionicons
            name={inputValue === '' ? 'mic' : 'send'}
            size={24}
            color={themeColors?.onPrimary}
          />
        </TouchableOpacity>
      </View>
    );
  },
);

export { ChatBar };
