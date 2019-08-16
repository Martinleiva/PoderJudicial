import React, { Component } from 'react';
import firebase from 'firebase';
import { 
  createSwitchNavigator,
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CargaScreen from './src/screens/CargaScreen';
import AccesoScreen from './src/screens/AccesoScreen';
import DetalleLaboralScreen from './src/screens/DetalleLaboralScreen';
import DetalleEmpleadoScreen from './src/screens/DetalleEmpleadoScreen';

class App extends Component {

  //state = {loggedIn: null};

  componentDidMount(){

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCk9gVeZVujLjHWUmNxL9E9P5xGKwuJnRs",
        authDomain: "poderjudicial-7e8d4.firebaseapp.com",
        databaseURL: "https://poderjudicial-7e8d4.firebaseio.com",
        projectId: "poderjudicial-7e8d4",
        storageBucket: "",
        messagingSenderId: "889389599184",
        appId: "1:889389599184:web:699be33f6dd02cc7"
      });
    }
  }



  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;

const DashboardTabNav = createBottomTabNavigator({
  Personal: DetalleEmpleadoScreen,
  Laboral: DetalleLaboralScreen,
}, { 
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName,
    };
  },
  
});

const DashboardStackNav = createStackNavigator({
  DashboardTabNav: DashboardTabNav
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#1565c0',
      },
      headerLeft: ( 
        <Icon 
          style={{ paddingLeft: 10, color: '#fff' }} 
          type='ionicon' 
          name="menu" 
          size={30} 
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  }
});

const AppDrawerNav = createDrawerNavigator({
    Dashboard: DashboardStackNav
});

const AppSwitchNav = createSwitchNavigator({
  Welcome: AccesoScreen,
  Dashboard: AppDrawerNav
  });

const AppContainer = createAppContainer(AppSwitchNav);
