import {createStackNavigator} from '@react-navigation/stack';

import {View, Text} from 'react-native';
import React from 'react';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Test!</Text>
    </View>
  );
};

function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Settings" component={HomeScreen} />
    </Stack.Navigator>
  );
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
