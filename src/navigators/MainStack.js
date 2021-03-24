import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const Imagem = styled.Image`
    width:30px;
    height:30px;
    margin:20px;
`;

const Texto = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-left:10px;
`;
const MainStack = createStackNavigator();


export default () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#888',
                
            },
            headerTitleStyle:{
                fontSize:18
            }
        }}>
            <MainStack.Screen name="Home" component={HomeScreen} options={{
                headerLeft: () => <Texto>Exercício</Texto>,
                headerTitle: () => <Imagem source={require('../images/home.png')}/>

            }}/>
            <MainStack.Screen name="About" component={AboutScreen}/>
        </MainStack.Navigator>
    );
}