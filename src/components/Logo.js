import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Logo extends Component {
    render() {
      return (
        <View style={styles.container}> 
            <Image style={{ width: 200, height: 200 }} source={require('../img/catamarca.jpg')} />
            <Text style={styles.textStyle}>Poder Judicial Catamarca</Text>
        </View>
      );
    }
  }
  
  export default Logo;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    textStyle: {
      color: '#000',
      fontSize: 20,
      width: 150,
      textAlign: 'center',
      fontWeight: '600'
    }
});
