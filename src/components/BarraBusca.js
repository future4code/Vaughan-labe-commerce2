import React, { Component } from 'react';
import styled from 'styled-components';
import BarradeBuscar from './svg/search-solid.svg';

const Box = styled.div`
    position: relative;
    display: inline;
    transform: translate(-50%,-50%);

    :hover i{
    opacity: 0;
    z-index: -1;
}
    :hover input{
        width: 100%;
        background: #272133;
        border-radius: 10px;
        display: flex;
        }
`

const Barra = styled.input`
    padding: 35px;
    width: 80px;
    height: 60px;
    background: none;
    border: 4px solid #555;
    border-radius: 50px;
    box-sizing: border-box;
    font-size: 26px;
    color: #eee;
    outline: none;
    transition: .5s;

`

const Lupa = styled.i`
    position: absolute;
    height: 40px;
    width: 40px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #272133;
    top: 40px;
    left: 40px;
    transition: .2s;
`





export class BarradeBusca extends Component {

    onChangeBuscaProduto = (event) => {
        this.props.onChangeBuscaProduto(event.target.value);
      };

    render() {

        return (
           <Box>
        <form name="busca">
            <Barra type="text" name="txt" placeholder=''
            onmouseout="document.search.txt.value = ''" />
        </form>
            <Lupa value={this.props.buscaProduto} onChange={this.onChangeBuscaProduto}><img src={BarradeBuscar} alt="Buscar"/></Lupa>
            </Box>
        );
            
      }

}

export default BarradeBusca