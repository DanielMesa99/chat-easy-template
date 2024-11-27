import React from 'react';
import { View, Text } from 'react-native';

/**
 * Header component renders the header for the screens.
 *
 * @component
 * @example
 * // Example usage:
 * <Header />
 *
 * @returns {React.JSX.Element} The header component for the screens.
 */
const Header: React.FC = React.memo((): React.JSX.Element => {
  return (
    <View className="h-16 justify-center bg-light-background dark:bg-dark-background">
      <Text className="text-3xl font-bold ml-5 text-light-primary dark:text-dark-primary">
        Chat
      </Text>
    </View>
  );
});

export { Header };
