import './global.css';
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { I18nextProvider } from 'react-i18next';
import { useColorScheme } from 'nativewind';

/** Custom dependencies **/
import { i18n } from './src/configs';
import { MainDrawer } from './src/modules/navigation';

export default function App() {
  const { colorScheme } = useColorScheme();

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'}/>
          <MainDrawer />
        </SafeAreaProvider>
      </NavigationContainer>
    </I18nextProvider>
  );
}
