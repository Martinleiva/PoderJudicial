import React, { Component } from 'react';
import { Text, Button, View, StatusBar, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class DetalleEmpleadoScreen extends Component {

  render() {
    return (
      <View>
        <StatusBar backgroundColor='#003c8f' barStyle='light-content' />
        <FlatList
          data={[
            {key: 'Apellido/s: '},
            {key: 'Nombre/s: '},
            {key: 'N° Documento'},
            {key: 'Tipo de Documento: '},
            {key: 'N° CUIL: '},
            {key: 'Sexo: '},
            {key: 'Estado Civil: '},
            {key: 'Nacionalidad: '},
            {key: 'Fecha de Nacimiento: '},
            {key: 'Lugar de Nacimiento: '},
            {key: 'Telefono Fijo: '},
            {key: 'Telefono Celular: '},
            {key: 'Email: '},
            {key: 'Domicilio: '},
            {key: 'Barrio: '},
            {key: 'Localidad: '},
            {key: 'Codigo Postal: '},
            {key: 'Departamento: '},
            {key: 'Provincia: '},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

export default DetalleEmpleadoScreen;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 16,
    height: 44,
    fontWeight: 'bold'
  },
});