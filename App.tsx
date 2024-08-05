import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import DashboardScreen from './src/Screens/dashboard';
import SplashScreen from './src/Screens/SplashScreen';
import UploadFileScreen from './src/Screens/uploadfile';
import { Provider } from 'react-redux';
import store from './src/store/store';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <NavigationContainer>
      <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
          <Stack.Screen name="UploadFileScreen" component={UploadFileScreen} options={{title:'Select File'}} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} options={{title:'Dashboard'}} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
