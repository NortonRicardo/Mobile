import React from 'react'
import { View, StyleSheet } from 'react-native'


// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Blabla from './components/Primeiro'
// import X, { Comp2, Comp3 } from './components/Multi'

// import Botao from './components/Botao'
import Contador from './components/Contador'
import Pae from './components/indireta/Pae'

function App(){
    return (
        <View style={style.App}>
            
            <Pae />
            
             {/*
             <Contador inicial={100}/>
             <Botao />
              <MinMax min="3" max="20" /> 
              <Ale min={10} max={50} />
              <Aleatorio min={-10} max={60}/> <X></X>
              <Comp3></Comp3>
              <Comp2></Comp2>
              <Blabla></Blabla> */}
        </View> 
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