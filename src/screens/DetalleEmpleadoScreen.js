import React, { Component } from 'react';
import { Text, Button, View, AsyncStorage } from 'react-native';
import firebase from 'firebase';


class DetalleEmpleadoScreen extends Component {

   singOut = async() => {
     await AsyncStorage.clear();
     this.props.navigation.navigate('Welcome');
   }

  render() {
    return (
      <View>
        <Text> Detalle Empleado </Text>
        <Button title='Salir' onPress={this.singOut} />
      </View>
    );
  }
}

export default DetalleEmpleadoScreen;
