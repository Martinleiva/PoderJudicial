import React, { Component } from 'react';
import firebase from 'firebase';
import { 
  createSwitchNavigator,
  createAppContainer, 
  createDrawerNavigator, 
  createStackNavigator} from 'react-navigation';

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerContent from './src/screens/DrawerContent';
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

const DashboardTabNav = createMaterialBottomTabNavigator({
  Personal: { 
    screen: DetalleEmpleadoScreen, 
    navigationOptions:{
      title: 'PERSONAL',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='material-community' name='account' style={{color: tintColor}}/>
      )
    }
  },
  Laboral: { 
    screen: DetalleLaboralScreen,
    navigationOptions:{
      title: 'LABORAL',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={25} type='material-community' name='briefcase' style={{color: tintColor}}/>
      )
    }
  },
}, {
  initialRouteName: 'Personal',
  activeColor: '#1565c0',
  shifting: true,
  barStyle: {backgroundColor: '#f2f2f2' },
});

const DashboardStackNav = createStackNavigator({
  DashboardTabNav: DashboardTabNav
}, {
  defaultNavigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle:('Detalle '+ routeName),
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
},{
  contentComponent: DrawerContent
});

const AppSwitchNav = createSwitchNavigator({
  Welcome: AccesoScreen,
  Dashboard: AppDrawerNav
  });

const AppContainer = createAppContainer(AppSwitchNav);
