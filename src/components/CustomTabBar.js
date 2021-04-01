import React from 'react';
import styled from 'styled-components/native';

const Tab = styled.View`
    flex-direction:row;
    background-color:#ccc;
`;
const TabTouch = styled.TouchableHighlight`
    flex:1;
    align-items:center;
    justify-content:center;
    padding:10px;
    height:50px;
`;
const MiddleTab = styled.TouchableHighlight`
    align-items:center;
    justify-content:center;
    width:70px;
    height:70px;
    background-color:#00FF00;
    margin-top:-20px;
    border-radius:35px;
`;
const Label = styled.Text`
    font-size:18px;
    color:#FF0000;
`;



const CustomTabBar = ({state, descriptors, navigation}) => {

    return(
        <Tab>
            {state.routes.map((route,index)=> {
                const options = descriptors[ route.key ].options;

                let label = route.name;
                if (options.tabBarLabel != undefined){
                    label=options.tabBarLabel;
                }else if(options.title != undefined){
                    label=options.title;
                }

                const isfocused = state.index === index;

                const handleTabPress = () => {
                    navigation.navigate ( route.name );
                }

                if (route.name == 'TabHome'){
                    return(
                        <MiddleTab key={index} onPress={handleTabPress} >
                            <Label>{label}</Label>
                        </MiddleTab>
                    );
                }else{
                    return(
                        <TabTouch key={index} onPress={handleTabPress} >
                            <Label>{label}</Label>
                        </TabTouch>
                    );
                }



            })}
        </Tab>
    );
}

export default CustomTabBar;