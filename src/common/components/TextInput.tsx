import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useMemo, useState } from 'react';
import { TextInput as Input, View, TextInputProps as InputProps, TouchableOpacity, Text } from 'react-native';

/** Custom dependencies **/
import { colorClass } from '../../configs';
import { IconName } from '../types';
import { BaseProps } from '../interfaces';

/**
 * Interface for the TextInput component props.
 * Defines the properties passed to the TextInput, including the label, classes of NativeWind, the error to show and the optional icon name.
 */
interface TextInputProps extends InputProps {
  label?: string;
  containerClassName?: string;
  error?: string;
  iconLeft?: IconName;
}

/**
 * TextInput component renders a customizable TextInput.
 * It accepts all props of the native TextInput of React Native.
 *
 * @component
 * @example
 * // Example usage:
 * <TextInput 
 *   label='username' 
 *   value={username} 
 *   onChangeText={setUsername} 
 *   ClassName="text-lg" 
 *   error={errors.username} 
 *   iconLeft="person" 
 *   themeColors={colorScheme} 
 * />
 *
 * @param {TextInputProps & BaseProps} props - Component props.
 * @returns {JSX.Element} A customizable TextInput component.
 */
const TextInput: React.FC<TextInputProps & BaseProps> = React.memo(
  ({
    label,
    containerClassName,
    error,
    iconLeft,
    secureTextEntry = false,
    themeColors,
    ...props
  }: TextInputProps & BaseProps): JSX.Element => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    // Get NativeWind class for theme colors
    const {
      border_active,
      border_inactive,
      error: errorColor,
      sub,
      border_error,
      primary,
    } = colorClass;

    /**
     * Toggles the visibility of the password.
     */
    const togglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible(prevState => !prevState);
    }, []);

    /**
     * Get the border style based on props.
     * 
     * @returns {string} Computed border style.  
     */
    const borderColor = useMemo(() => {
      if (error) return border_error;
      return isFocused ? border_active : border_inactive;
    }, [error, isFocused, border_active, border_inactive, border_error]);

    /**
     * Get the icon style based on props.
     * 
     * @returns {string} Computed icon style.  
     */
    const iconColor = useMemo(() => (isFocused ? primary : sub), [isFocused, primary, sub]);

    return (
      <View className={containerClassName}>
        <View className={`flex-row items-center border-2 ${borderColor} rounded-lg`}>
          {iconLeft && (
            <Text className={`p-4 ${iconColor}`}>
              <Ionicons name={iconLeft} size={24} />
            </Text>
          )}
          <Input
            secureTextEntry={isPasswordVisible}
            placeholder={label}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={themeColors?.onBackground}
            style={{ width: '70%', color: themeColors?.onBackground }} // NativeWind wont work well for this styles
            {...props}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={togglePasswordVisibility} className="absolute p-4 right-1">
              <Text className={iconColor}>
                <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} />
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {error && <Text className={`text-lg text-center ${errorColor}`}>{error}</Text>}
      </View>
    );
  },
);

export { TextInput };
