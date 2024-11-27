import React from 'react';
import { View, Text } from 'react-native';

const StorieScreen: React.FC = (): JSX.Element => {
  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      <Text className="color-light-onBackground dark:color-dark-onBackground">
        StorieScreen
      </Text>
    </View>
  );
};

export { StorieScreen };
