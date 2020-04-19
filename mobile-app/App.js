import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './src/screens/loading';
import TabLayout from './src/layout/tabs';
import * as Font from 'expo-font';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setIsLoading(true);
    Font.loadAsync(customFonts).then(() => {
      setIsLoading(false);
    })
  }, []);
  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

const customFonts = {
  'IBMPlexSans-Bold': require('./src/fonts/IBMPlex/IBMPlexSans-Bold.ttf'),
  'IBMPlexSans-Light': require('./src/fonts/IBMPlex/IBMPlexSans-Light.ttf'),
  'IBMPlexSans-Medium': require('./src/fonts/IBMPlex/IBMPlexSans-Medium.ttf'),
};

export default App;
