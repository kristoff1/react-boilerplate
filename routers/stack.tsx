import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home/home';
import ListScreen from '../screens/lists/lists';
import { RootStackParamList } from './routes';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='ListScreen' component={ListScreen} initialParams={{title: '', subTitle: ''}} />
        </Stack.Navigator>
    </NavigationContainer>);
}
