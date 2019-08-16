import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class DetalleEmpleadoScreen extends Component {

   singOut = async() => {
     await AsyncStorage.clear();
     this.props.navigation.navigate('Welcome');
   }

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#003c8f' barStyle='light-content' />
        <Text> Detalle Empleado </Text>
        <Button title='Salir' onPress={this.singOut} />
      </View>
    );
  }
}

export default DetalleEmpleadoScreen;
