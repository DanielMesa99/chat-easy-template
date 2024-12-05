import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

/**
 * ThemeSwitcher component to toggle between light and dark themes.
 *
 * @component
 * @example
 * <ThemeSwitcher iconColor='blue' />
 *
 * @param {ThemeSwitcherProps} props - The props for the ThemeSwitcher component.
 * @returns {JSX.Element} The rendered theme switch component.
 */
const ThemeSwitcher: React.FC = React.memo((): JSX.Element => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const iconName = colorScheme === 'dark' ? 'moon-sharp' : 'sunny';

  return (
    <View className="flex items-center justify-center bg-transparent">
      <TouchableOpacity
        onPress={toggleColorScheme}
        className="p-1.5 rounded-2xl"
        activeOpacity={0.9}
      >
        <Text className='color-light-primary dark:color-dark-primary'>
          <Ionicons name={iconName} size={24} />
        </Text>
      </TouchableOpacity>
    </View>
  );
},
);

export { ThemeSwitcher };
