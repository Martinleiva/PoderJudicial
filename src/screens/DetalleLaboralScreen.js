import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, FlatList } from 'react-native';


class DetalleLaboralScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#003c8f' barStyle='light-content' />
        <FlatList
          data={[
            {key: 'Estado laboral actual: '},
            {key: 'Ultimo cambio de estado: '},
            {key: 'N° Legajo: '},
            {key: 'Antiguedad: '},
            {key: 'Antiguedad en otros orgs: '},
            {key: 'Horario laboral: '},
            {key: 'CARGO: '},
            {key: 'Nivel: '},
            {key: 'Agrupamiento: '},
            {key: 'Situación laboral: '},
            {key: 'Jurisdicción: '},
            {key: 'Fecha de ingreso al cargo: '},
            {key: 'Tipo de Instr. legal: '},
            {key: 'Instrumento legal: '},
            {key: 'Fecha Instr. legal: '},
            {key: 'Circunscripción: '},
            {key: 'Unidad: '},
            {key: 'Organismo: '},
            {key: 'Dependencia: '},
            {key: 'Dirección: '},
            {key: 'Departamento: '},
            {key: 'División: '},
            {key: 'Fecha ingreso a la Dep: '},
            {key: 'Tipo de Instr. legal: '},
            {key: 'Instrumento legal: '},
            {key: 'Fecha Instr. legal: '},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

export default DetalleLaboralScreen;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 16,
    height: 44,
    fontWeight: 'bold'
  },
});