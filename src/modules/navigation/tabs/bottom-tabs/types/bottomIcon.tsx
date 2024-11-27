import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

/**
 * Keys for the bottom icons.
 *
 * @type {BottomIconKeys}
 */
type BottomIconKeys = 'Chats' | 'Stories' | 'Community' | 'Calls';

/**
 * A record of bottom icons components.
 *
 * @type {Record<BottomIconKeys, (props: any) => React.JSX.Element>}
 */
const bottomIcons: Record<BottomIconKeys, (props: any) => React.JSX.Element> = {
  Chats: ({ isFocused, ...props }) => (
    <Text
      className={
        isFocused
          ? 'text-light-primary dark:text-dark-primary'
          : 'text-light-onBackground dark:text-dark-onBackground'
      }
    >
      <Ionicons
        name={isFocused ? 'chatbubble' : 'chatbubble-outline'}
        size={28}
        {...props}
      />
    </Text>
  ),
  Stories: ({ isFocused, ...props }) => (
    <Text
      className={
        isFocused
          ? 'text-light-primary dark:text-dark-primary'
          : 'text-light-onBackground dark:text-dark-onBackground'
      }
    >
      <Ionicons
        name={isFocused ? 'book' : 'book-outline'}
        size={28}
        {...props}
      />
    </Text>
  ),
  Community: ({ isFocused, ...props }) => (
    <Text
      className={
        isFocused
          ? 'text-light-primary dark:text-dark-primary'
          : 'text-light-onBackground dark:text-dark-onBackground'
      }
    >
      <Ionicons
        name={isFocused ? 'chatbubbles' : 'chatbubbles-outline'}
        size={28}
        {...props}
      />
    </Text>
  ),
  Calls: ({ isFocused, ...props }) => (
    <Text
      className={
        isFocused
          ? 'text-light-primary dark:text-dark-primary'
          : 'text-light-onBackground dark:text-dark-onBackground'
      }
    >
      <Ionicons
        name={isFocused ? 'call' : 'call-outline'}
        size={28}
        {...props}
      />
    </Text>
  ),
};

export { bottomIcons, BottomIconKeys };
