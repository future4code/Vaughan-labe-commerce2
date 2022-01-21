import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const NovoProduto = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const Card = styled.div`
    min-width: 300px;
    min-height: 500px;
    border: 1px solid #eee;
    overflow: hidden;
    padding: 10px;
    box-shadow: 2px 8px 20px #ddd;
    margin: 10px;
    transition: 0.5s linear;

:hover{
    box-shadow: none;
}
`

const Imagem = styled.img`
    max-width: 300px;
    width: 100%;
    height: 100%;
    max-height: 300px;
    display: block;
    object-fit: cover;
`
const Conteudo = styled.div`

`
const H3 = styled.h3`
text-transform: uppercase;
margin: 10px 0;

a{
    text-decoration: none;
    color: #333;
}

a:hover{
    color: crimson;
}


`
const Preco = styled.span`
color: crimson;
`
const Descricao = styled.p`
margin: 10px 0;
word-wrap: break-word;
max-width: 350px;
`
const Botao = styled.button`
border: none;
outline: none;
background: #333;
color: white;
width: 100%;
height: 40px;
display: block;
cursor: pointer;
text-transform: uppercase;
letter-spacing: 2px;
margin: 15px 0;
`

export class Produtos extends Component {
    render() {
        return(
         <NovoProduto>
             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>

             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>
             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>
             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>
             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>
             <Card>
                <Link to="/">
                    <Imagem src="https://images-americanas.b2w.io/produtos/01/00/sku/33311/3/33311370_1GG.jpg"alt="Imagem"/>
                </Link>
                <Conteudo>
                    <H3>
                        <Link to="/">
                            Camisa
                        </Link>
                    </H3>
                    <Preco>
                        R$. 23.43
                    </Preco>
                    <Descricao>
                        Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito  Camisa Bonita Tecido Bonito
                    </Descricao>
                    <Botao>Adicionar ao Carrinho</Botao>
                </Conteudo>
             </Card>
         </NovoProduto>
              
        )
    }
}

export default Produtos