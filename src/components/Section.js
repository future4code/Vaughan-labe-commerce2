import React, { Component } from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';
import Carrinho from './Carrinho'


const NovaSection = styled.section`
box-shadow: 0 0 5px #ccc;
padding: 15px 10px;
`


 

export class Section extends Component {
    render() {
        return(
            <NovaSection>
                <Produtos />
            </NovaSection>
        )
    }
}

export default Section