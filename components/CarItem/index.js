import { View, Text, ImageBackground} from 'react-native'
import React from 'react'
import styles from './styles';

const CarItem = (props) => {
  return (
     
    <View style={styles.container}>
    <ImageBackground source={require('../../assets/images/Roadrunner.jpg')}
      style={styles.image} />

    <View style={styles.titles}>
      <Text style={styles.title}>Model 2</Text>
      <Text style={styles.subtitle}>Starting at $69,470</Text>
    <StatusBar style="auto" />
    </View>
    </View>
  );
};

export default CarItem;