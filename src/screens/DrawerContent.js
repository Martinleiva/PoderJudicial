import React, { Component } from 'react';
import { Text, ScrollView, Image, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Math.round(Dimensions.get('window').width);

class DrawerContent extends Component {

  singOut = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Welcome');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={{ width: 100, height: 100, alignSelf:'center' }} source={require('../img/avatarMG.jpg')} />
        <Text style={styles.textStyle}>Nombre</Text>
        <Text style={styles.textStyle}>Cargo</Text>

        <View style={styles.lineStyle}></View>
        <View style={{lex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} type='material-community' name='bank' />
          <Text style={styles.textStyle}>Dependencia</Text>
        </View>

        <View style={{lex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} type='material-community' name='folder' />
          <Text style={styles.textStyle}>N° Legajo</Text>
        </View>

        <View style={styles.lineStyle} />

        <View style={{lex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} type='material-community' name='map-marker' />
          <Text style={styles.textStyle}>Domicilio</Text>
        </View>

        <View style={styles.lineStyle} />

        <View style={{lex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} type='material-community' name='phone' />
          <Text style={styles.textStyle}>Telefono</Text>
        </View>

        <View style={styles.lineStyle} />

        <View style={{lex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={25} type='material-community' name='email' />
          <Text style={styles.textStyle}>Email</Text>
        </View>

        <View style={styles.lineStyle} />

        <TouchableOpacity style={styles.button} onPress={this.singOut}>
          <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 60,
    //flexGrow: 1,
    //flexDirection: 'column'
  },
  lineStyle: {
    borderWidth: 0.5,
    width: screenWidth,
    borderColor:'#c1c1c1',
    margin:10,
  },
  textStyle: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight:'bold'
  },
  button: {
    backgroundColor: '#1565c0',
    borderColor: 'white',
    marginVertical: 20,
    borderRadius: 5,
    color: 'white',
    overflow: 'hidden',
    padding: 12,
    alignSelf:'center',
},

buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
},
});
