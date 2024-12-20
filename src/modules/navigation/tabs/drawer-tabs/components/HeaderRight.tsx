import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

/** Custom dependencies **/
import { colorClass } from '../../../../../configs';

interface HeaderLeftProps {
  onCameraPress: () => void;
  onSearchPress: () => void;
  onSettingsPress: () => void;
}

const HeaderRight: React.FC<HeaderLeftProps> = React.memo(
  ({ onCameraPress, onSearchPress, onSettingsPress }): React.JSX.Element => {
    // Get NativeWind classes for theme colors
    const { on_bg } = colorClass;

    return (
      <View className="flex-row">
        <TouchableOpacity onPress={onCameraPress} activeOpacity={0.7}>
          <Text className={`${on_bg}`}>
            <Ionicons name="camera-outline" size={24} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSearchPress}
          className="ml-5"
          activeOpacity={0.7}
        >
          <Text className={`${on_bg}`}>
            <Ionicons name="search-outline" size={24} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onSettingsPress}
          className="ml-5 mr-3"
          activeOpacity={0.7}
        >
          <Text className={`${on_bg}`}>
            <Ionicons name="settings-outline" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

export { HeaderRight };
