import React, {useState,useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation,} from '@react-navigation/native';
import lista from '../lista';
import ListaItem from '../components/ListaItem';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import AddItemArea from '../components/AddItemArea';

const Page = styled.SafeAreaView`
    flex:1;
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
const Listagem = styled.FlatList`
    width:70%;
    max-height:250px;
`;

const Botao = styled.Button``;

const HomeScreen = () =>{
    const navigation = useNavigation();

    /*useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=><Botao title="Adicionar" onPress={addIngrediente}/>,
        })
    },[]);*/

    const [items, setItems] = useState(lista);

    const addIngrediente = (txt)=>{
        let newItems = [...items];
        newItems.push({
            id:uuid(),
            ingrediente:txt,
        });
        setItems(newItems);
        
     }    
    
    return(
        <Page>
            <AddItemArea onAdd={addIngrediente}/>
            <Listagem 
                data = {items}
                renderItem ={({item})=><ListaItem data= {item}/>} 
                keyExtractor={(item)=>item.id}
            />
            
        </Page>
    );
}

export default HomeScreen;

