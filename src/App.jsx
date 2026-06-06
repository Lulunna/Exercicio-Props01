import { useState } from 'react'
import Titulo from './titulo/Titulo'
import Paragrafo from './Paragrafo/Paragrafo'
import Imagem from './imagem/Imagem'
import Botao from './Botao/Botao'
import Nome from './Usuario/Usuario'
import Produto from './produto/Produto'
import Saudacao from './saudacao/Saudacao'
import CardSimples from './CardSimples/CardSimples'
import Rodape from './Rodape/Rodape'
import Status from './Status/Status'


function App() {
  return (
    <>
    <Titulo texto = "Exercicio 01 Props"/>
    <Paragrafo conteudo = "Java"/>
<Imagem src="https://i.pinimg.com/736x/91/fa/e7/91fae7ce9d2d3d4e1e430006c828f720.jpg" alt="Imagem"/>
<Botao label = "Botão" />
<Nome nome = "Raquel" idade = "23" />
<Produto nome = "PC" preco = "2.500" />
<Saudacao nome = " Raquel!"/>
<CardSimples titulo ="Um cachorro" descricao= "Ele é um animal programando" />
<Rodape ano ="©2026" />
<Status mensagem ="Olá, mundo!" />






    </>
  )
  

}

export default App
