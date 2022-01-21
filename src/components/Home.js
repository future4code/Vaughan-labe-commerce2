import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import BarradeBusca from './BarraBusca'



export class Home extends Component {
  state = {
    listaProdutos: [
      {
        id: 1,
        name: "",
        value: 1,
        imageUrl:
          "",
        quantidade: 1,
      },
     
    ],

    valorMinimo: "",
    valorMaximo: "",
    ordenacao: "",
    buscaProduto: "",
    carrinho: [],
  };

  adicionarCarrinho = () => {
    
  };

  adicionarQuantidade = () => {

  };

  diminuirQuantidade = () => {

  };

  onChangeValorMinimo = () => {

  };

  onChangeValorMaximo = () => {
    
  };

  onChangeOrdem = () => {
   
  };

  onChangeBuscaProduto = () => {
  
  };

  onClickLimparFiltros = () => {
   
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {

    return (
      <>
      <Header />

      <BarradeBusca />
      
      <Section />
      </>
    );
  }
}

export default Home