import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

/**
 * LanguageSwitcher component.
 *
 * This component renders flags that allow the user to switch the application's language.
 *
 * @component
 * @example
 * // Example usage:
 * <LanguageSwitcher />
 *
 * @returns {JSX.Element} The rendered component.
 */
const LanguageSwitcher = React.memo((): JSX.Element => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  /**
   * Changes the application's language and saves it to AsyncStorage.
   *
   * @param {string} lng - The language code to switch to (e.g., 'en' for English, 'es' for Spanish).
   */
  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      //await saveItem(STORAGE_KEYS.LANGUAGE, lng);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <View className="flex-row justify-center">
      <TouchableOpacity
        onPress={() => changeLanguage('en')}
        activeOpacity={0.9}
      >
        <Image
          source={require('../assets/images/us.png')}
          className={`w-9 h-7 mx-2.5 my-3.75 ${currentLanguage === 'en' ? 'border-2 border-light-primary dark:border-dark-primary' : ''}`}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeLanguage('es')}
        activeOpacity={0.9}
      >
        <Image
          source={require('../assets/images/es.png')}
          className={`w-9 h-7 mx-2.5 my-3.75 ${currentLanguage === 'es' ? 'border-2 border-light-primary dark:border-dark-primary' : ''}`}
        />
      </TouchableOpacity>
    </View>
  );
});

export { LanguageSwitcher };
