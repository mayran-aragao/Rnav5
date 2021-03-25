import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const Tab = createBottomTabNavigator();

const Imagem = styled.Image`
    width:32px;
    height:32px;

`;


export default ()=> (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({ focused })=>{
                let imgSource = null;

                switch(route.name){
                    case 'TabHome':
                        imgSource = require('../images/home.png');
                    break;
                    case 'TabAbout':
                        imgSource = require('../images/config.png');
                    break;        
                }

                return <Imagem source={imgSource}/>
            }

        })}
    >
        <Tab.Screen name= "TabHome" component = {TabHomeScreen} options={{tabBarLabel:'Home'}}/>
        <Tab.Screen name= "TabAbout" component = {TabAboutScreen} options={{tabBarLabel:'About'}}/>
    </Tab.Navigator>

);