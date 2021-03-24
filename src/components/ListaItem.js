import React from 'react';
import styled from 'styled-components/native';


const Item = styled.View`
    align-items:center;
    padding:10px;
`;

const Texto = styled.Text`
    font-size:18px;
    
    color:#FFF;

`;

export default(props) => {
    return(
        <Item >
          <Texto>{props.data.ingrediente}</Texto>
        </Item>

    );

}