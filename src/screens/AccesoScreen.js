import React, { Component } from 'react';
import { 
  StatusBar, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  TextInput, 
  View, 
  ActivityIndicator,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from 'firebase';
import axios from 'axios';
import qs from 'qs';

import Logo from '../components/Logo';
//import Form from '../components/Form';


class AccesoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', loading: false };
    this.loadData();
  }

  login = async() => {
    
    this.setState({loading:true});

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.loginSuccess.bind(this))
    .catch(this.loginFail.bind(this));
  }

  loginFail() {
    this.setState({loading:false});
    alert("Email o contraseña incorrecta");
  }

  loginSuccess = async() => {
    await AsyncStorage.setItem('userToken', '1');
    this.setState({loading:false});
    this.props.navigation.navigate('Dashboard');
  }

  loadData = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken === '1'){
      this.props.navigation.navigate('Dashboard');
    } else {
      this.props.navigation.navigate('Welcome');
    }
  }

  renderButton(){
    if (this.state.loading){
      return(
        <ActivityIndicator size='large' color='#1565c0'/>
      );
    }
    return (
      <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
        <ScrollView> 
            <StatusBar backgroundColor='#003c8f' barStyle='light-content' />
            <Logo />
            <View style={styles.container}> 
            <TextInput 
                style={styles.inputBox} 
                underlineColorAndroid='#1e88e5' 
                placeholder="Usuario"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                onSubmitEditing={() => this.password.focus()}
            />
            <TextInput 
                style={styles.inputBox} 
                secureTextEntry
                underlineColorAndroid='#1e88e5' 
                placeholder="Contraseña" 
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                ref={(input) => this.password = input}
            />
            {this.renderButton()}
          </View>
        </ScrollView>
    );
  }
}

export default AccesoScreen;

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

// axios.post('http://httpbin.org/post', qs.stringify({
//       email: this.state.email,
//       password: this.state.password 
//     }))
//     .then((response) => {
//       this.props.navigation.navigate('Dashboard');
//       this.setState({onLogin: true});
//       console.log(response, this.state.login);
//     })
//     .catch((error) => {
//       alert(error.response.data.message);
//     });

