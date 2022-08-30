import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react'
import CarItem from './components/CarItem';

export default function App() {
  return (
    
    
    <View style={styles.container}>
   
   <View style={styles.container}>

      <ImageBackground source={require('./assets/images/Roadrunner.jpg')}
      style={styles.image} />

    <View style={styles.titles}>
      <Text style={styles.title}>Model 1</Text>
      <Text style={styles.subtitle}>Starting at $69,470</Text>
    <StatusBar style="auto" />
    </View>
    </View>

     
 <View style={styles.container}>
    <ImageBackground source={require('./assets/images/Roadrunner.jpg')}
      style={styles.image} />

    <View style={styles.titles}>
      <Text style={styles.title}>Model 2</Text>
      <Text style={styles.subtitle}>Starting at $69,470</Text>
    <StatusBar style="auto" />
    </View>
    </View>

    



    <StatusBar styles="auto"/>

 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height: '50%',
    borderWidth:10,
    borderColor:'green',
    backgroundColor: 'yellow',
    alignItems:"center",
    //justifyContent: 'center',

   },
    carContainer: {
      width: '100%',
      height: '100%',

    },

    titles: {
      marginTop: '10%',
      width: '100%',
      alignItems: 'center',

    },
    title: {
      backgroundColor:"red",
      fontSize: 20,
      fontWeight: '600',

    },
    subtitle: {
      backgroundColor:"center",
      fontSize: 16,
      color: 'red',

    },
    image: {
      width: '100%',
      height: '90%',
      resizeMode: 'cover',
      position: 'absolute',
    
    }
  
});

