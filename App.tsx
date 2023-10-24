/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Core from './Core';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Core />
    </NavigationContainer>
  );
}

export default App;
