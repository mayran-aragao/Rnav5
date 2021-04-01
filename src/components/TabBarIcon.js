import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import {View,Text,Image} from 'react-native';
import styled from 'styled-components/native';

const Imagem = styled.Image`
    width:32px;
    height:32px;
`;
const Badge = styled.View`
    position:absolute;
    right:-6px;
    top:-3px;
    background-color:#FF0000;
    width:15px;
    height:15px;
    border-radius:8px;
    justify-content:center;
    align-items:center;
`;
const BadgeText = styled.Text`
    color:#FFF;
    font-size:10px;
`;
const TabBarIcon =(props)=>{

        let imgSource = null;
        let badgeCount = 0;
        switch(props.name){
            case 'TabHome':
              imgSource = require('../images/home-blue.png');
            break;
            case 'TabAbout':
                imgSource = require('../images/atividade.png');
            break;
            case 'TabConfig':
                imgSource = require('../images/config.png');
                badgeCount = 5;
            break;          
        }

        return (
            <View>
                <Imagem source={imgSource}/>
                {badgeCount > 0 &&
                    <Badge>
                        <BadgeText>{badgeCount}</BadgeText>
                    </Badge> 
                }
            </View>
        );
    }

export default TabBarIcon;