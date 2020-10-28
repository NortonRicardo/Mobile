import React from 'react'
import { View, StyleSheet } from 'react-native'


// import MinMax from './components/MinMax'

import Aleatorio from './components/Aleatorio'

import Blabla from './components/Primeiro'
import X, { Comp2, Comp3 } from './components/Multi'

function App(){
    return (
        <View style={style.App}>
            
            <Aleatorio min={-10} max={100}/>

            {/* <MinMax min="3" max="20" /> */}
            {/* <Ale min={10} max={50} /> */}
             {/* <X></X>
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