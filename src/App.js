import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'


// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Blabla from './components/Primeiro'
// import X, { Comp2, Comp3 } from './components/Multi'

// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pae from './components/indireta/Pae'
// import Contador from './components/contador/contadorV2'
// import Pae from './components/relacao/Pae'
// import Filho from './components/relacao/Filho'
// import UsuarioLogado from './components/UsuarioLogado'

// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexBox from './components/layout/FlexBoxV1'
// import FlexBox from './components/layout/FlexBoxV2'
// import FlexBox from './components/layout/FlexBoxV3'
// import FlexBox from './components/layout/FlexBoxV4Fe'

import Mega from './components/mega/Mega'
function App(){
    return (
        <SafeAreaView style={style.App}>

            <Mega qtNumeros={7} />
            
             {/*
             <DigiteSeuNome />
                <ListaProdutosV2/>
                <ListaProdutos/>
                <UsuarioLogado usuario={  {nome: 'Gui', email: 'gui@hotmail.com'}  } />
                <Pae>
                    <Filho nome="Ana" sobrenome="Silva" />
                    <Filho nome="Raquel" sobrenome="Silva" />
                    <Filho nome="Dalton" sobrenome="Silva" />
                </Pae>

                <Pae>
                    <Filho nome="Julia" sobrenome="Stark" />
                    <Filho nome="Norton" sobrenome="Stark" />
                    <Filho nome="Tom" sobrenome="Stark" />
                </Pae>
              <Contador />
              <Pae />
              <Contador inicial={100}/>
              <Botao />
              <MinMax min="3" max="20" /> 
              <Ale min={10} max={50} />
              <Aleatorio min={-10} max={60}/> <X></X>
              <Comp3></Comp3>
              <Comp2></Comp2>
              <Blabla></Blabla> */
              }
        </SafeAreaView> 
    )
}

export default App

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})  