import { View, Text, Switch, TouchableOpacity } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';

const HomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-start items-center pt-1 bg-light-background dark:bg-dark-background">
      <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
    </View>
  );
};

export default HomeScreen;
