import React, {useState,useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation,} from '@react-navigation/native';


const Page = styled.View`
    width:100%;
    align-items:center;
    background-color:#222;
`;
const Input = styled.TextInput`
    width:70%;
    height:40px;
    border: 1px solid #000;
    border-radius:10px;
    background-color:#CCC;
    margin-bottom:10px;
`;
const Texto = styled.Text`
    font-size:18px;
    margin:10px;
    color:#FFF;
`;
const Botao = styled.Button``;

export default (props) =>{
    const navigation = useNavigation();

    const [item,setItem] = useState('');

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><Botao title="Adicionar" onPress={handleSubmit}/>,
        })
    },[]);

    const handleSubmit = () =>{
        if(item.trim() != ''){
            props.onAdd(item.trim());
            setItem('');
        }
    }
   

    return(
        <Page>
            <Texto>Digite um ingrediente</Texto>
            <Input 
                placeholder= "Digite um ingrediente" 
                value={item} 
                onChangeText={t=>setItem(t)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </Page>


    );
} 