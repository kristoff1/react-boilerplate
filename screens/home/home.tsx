import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation}: {navigation: any}) {

  const navigateToListScreen = () => {
    navigation.navigate('ListScreen', {
      title: 'List Screen',
      subTitle: 'This is the subtitle'
    });
  }

  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.text}>Home</Text>
      <Pressable onPress={ navigateToListScreen }>
        <Text>Go To List Screen</Text>
      </Pressable>
    </View>
  );
}

const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 30,
    }
  });