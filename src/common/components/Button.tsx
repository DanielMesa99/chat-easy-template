import React, { useMemo } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

/** Custom dependencies **/
import { colorClass } from '../../configs';

/**
 * Interface for the Button component props.
 * Defines the properties passed to the Button, including the title, custom colors, classes of NativeWind, etc.
 */
export interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonClassName?: string;
  textClassName?: string;
  children?: React.ReactNode;
  isSecondary?: boolean;
  customColor?: string;
  isTextLeft?: boolean;
  isOutline?: boolean;
}

/**
 * TextInput component renders a customizable Button.
 * 
 * @component
 * @example
 * // Example usage:
 * <Button
 *   title="Accept"
 *   onPress={handlePress}
 *   buttonClassName="bg-blue-600 p-4 rounded-lg"
 *   textClassName="text-white text-lg"
 * />
 *
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} A customizable button component.
 */
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  buttonClassName = 'p-4 rounded-lg',
  textClassName = 'text-white text-lg',
  children,
  isSecondary = false,
  customColor,
  isTextLeft = false,
  isOutline = false,
}: ButtonProps): JSX.Element => {
  // Get NativeWind class for theme colors
  const { primary_full, secondary_full, on_primary, on_secondary } = colorClass;

  /**
   * Get the button style based on props.
   * 
   * @returns {string} Computed button style.
   */
  const buttonStyle = useMemo(() => {
    if (customColor) return customColor;
    if (isSecondary) return secondary_full;
    if (disabled) return '#A9A9A9';
    if (isOutline) return 'bg-transparent';
    return primary_full;
  }, [customColor, isSecondary, disabled, isOutline, primary_full, secondary_full]);

  /**
   * Get the text style based on props.
   * 
   * @returns {string} Computed text style.
   */
  const textStyle = useMemo(() => {
    if (!isOutline) return on_primary;
    if (customColor) return customColor;
    if (isSecondary) return on_secondary;
    return on_primary;
  }, [customColor, isOutline, isSecondary, on_primary, on_secondary]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${buttonClassName} ${buttonStyle} ${isOutline ? 'border border-light-onPrimary' : ''}`}
      activeOpacity={0.9}
    >
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <View className="flex-row items-center justify-center">
          {!isTextLeft && children}
          <Text className={`${textClassName} ${textStyle}`}>{title}</Text>
          {isTextLeft && children}
        </View>
      )}
    </TouchableOpacity>
  );
};

export { Button };
