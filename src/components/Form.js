import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import qs from 'qs';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  login = () => {
    axios.post('http://31.220.63.104/usuario/api/v1/login/', qs.stringify({
      email: this.state.email,
      password: this.state.password 
    }))
    .then((response) => {
      console.log(response);
      this.props.navigation.navigate('Dashboard');
      // this.setState({ 
      //   email: response.data.email,
      //   nombre: response.data.nombre,
      // });
    })
    .catch((error) => {
      console.log(error.response.data.message);
      alert(error.response.data.message);
      this.setState({ 
        //error: error.response.data.message,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}> 
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='#1e88e5' 
                placeholder="Usuario"
                keyboardType="email-address"
                onChangeText={(email) => this.setState({ email })}
                onSubmitEditing={() => this.password.focus()}
            />
            <TextInput 
                style={styles.inputBox} 
                secureTextEntry
                underlineColorAndroid='#1e88e5' 
                placeholder="Contraseña" 
                onChangeText={(password) => this.setState({ password })}
                ref={(input) => this.password = input}
            />
            
            <TouchableOpacity style={styles.button} onPress={this.login}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    inputBox: {
        width: 310,
        fontSize: 20,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button: {
      backgroundColor: '#1565c0',
      marginVertical: 15,
      paddingTop: 10,
      paddingRight: 110,
      paddingBottom: 10,
      paddingLeft: 110,
      borderRadius: 5,
  },

  buttonText: {
      fontSize: 20,
      fontWeight: '700',
      color: '#fff',
  }
  });
