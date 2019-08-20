// Importar librerias para hacer el componente
import React from 'react';
import { Text, View, StatusBar } from 'react-native';

//Hacer el componente

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );    
};

const styles = {
    viewStyle: {
        backgroundColor: '#1565c0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        elevation: 2, //Propiedades similares a shadow
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'sans-serif',
        fontWeight: '500'
    }
};

//Hacer que el componente este disponible para otras partes de la aplicacion
export default Header;
