import React from 'react';
import styled from 'styled-components/native';
import {useNavigation,useRoute} from '@react-navigation/native';


const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Texto = styled.Text`
    font-size:18px;

`;
const Botao = styled.Button``;


const AboutScreen = () =>{
    const navigation = useNavigation();
    const route = useRoute();

    const name = route.params.name;

    const Back = () =>{
        navigation.goBack();
    }
    return(
        <Page>
            <Texto>
                Tela Sobre: {name}
            </Texto>
            <Botao title="Voltar" onPress={Back}/>
        </Page>
    );
}

export default AboutScreen;

