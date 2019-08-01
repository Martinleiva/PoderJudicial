import React, { Component } from 'react';
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator, 
  createBottomTabNavigator, 
  createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AccesoScreen from './src/screens/AccesoScreen';
import DetalleLaboralScreen from './src/screens/DetalleLaboralScreen';
import DetalleEmpleadoScreen from './src/screens/DetalleEmpleadoScreen';

class App extends Component {
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
