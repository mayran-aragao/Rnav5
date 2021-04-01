import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import TabBarIcon from '../components/TabBarIcon';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import TabConfigScreen from '../pages/TabConfigScreen';
const Tab = createBottomTabNavigator();


export default ()=> (
    <Tab.Navigator 
        screenOptions={({route})=>({
        tabBarIcon:()=> <TabBarIcon name={route.name}/>
        })}>
        <Tab.Screen name= "TabAbout" component = {TabAboutScreen} options={{tabBarLabel:'About'}}/>
        <Tab.Screen name= "TabHome" component = {TabHomeScreen} options={{tabBarLabel:'Home'}}/>
        <Tab.Screen name= "TabConfig" component = {TabConfigScreen} options={{tabBarLabel:'Config'}}/>
    </Tab.Navigator>

)