import React, { Component } from 'react';
import styled from 'styled-components';
import Barramenu from './svg/bars-solid.svg';
import Fechar from './svg/times-solid.svg';
import CarrinhoImg from './svg/shopping-cart-solid.svg';
import './css/NavBar.css'


const NovoHeader = styled.header`
overflow: hidden;
align-items: center;
justify-content: space-around;
display: flex;
min-height: 70px;
`



const Logo = styled.div`
 a{
     text-decoration: none;
     text-transform: uppercase;
     color: black;
 }

`
const H1 = styled.h1`

`


const NovoNav = styled.nav`
    display: flex;
`


const Li = styled.li`



a{
    text-decoration:none;
    text-transform: uppercase;
    color: #555;
    padding: 0 15px;
}

a:hover{
    color: lightseagreen;

}

    list-style: none;
    display: inline-block;
    
`





const Carrinho = styled.div`
span{
    position: absolute;
    top: -12px;
    right: -7px;
    background: crimson;
    font-size: 10px;
    color: white;
    padding: 3px 5px;
    border-radius: 50%;
    z-index: -1;
}
    cursor: pointer;
    position: relative;
`






 

export class Header extends Component {
    
    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }



    render() {

        const {toggle} = this.state;

        return(

            <NovoHeader>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Barramenu} alt="Icone Menu" width="20" />
                </div>
                <Logo>
                    <H1>
                        <a href="Logo">Logo</a>
                    </H1>
                </Logo>
                <NovoNav>
                <ul className={toggle ? "toggle" : ""}> 
                    <Li><a href="Home">Home</a></Li>      
                    <Li><a href="Produtos">Produtos</a></Li>
                    <Li><a href="Contato">Contato</a></Li>
                    <Li><a href="Login">Login / Registrar</a></Li>
                    <li className="fechar" onClick={this.menuToggle}>
                        <img src = {Fechar}   alt="Icone para fechar"  width="20" />
                    </li>
                </ul>
                <Carrinho>
                    <span>0</span>
                    <a href="Carrinho">
                    <img src = {CarrinhoImg} alt="Icone do carrinho de compras" width="20"/>
                    </a>
                </Carrinho>
            </NovoNav>
            </NovoHeader>
        );
        
    }
}

export default Header