import React, { useState } from 'react'
import { Button, Text, SafeAreaView, StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
       return (
           <View style={style.FlexV4}> 
            <View style={style.FlexV0}/>
            <View style={style.FlexV1}/>
            <View style={style.FlexV2}/>
           </View>
       )
 } 

 const style = StyleSheet.create({
     FlexV4:{
         flexGrow: 1,
         width: 100,
         backgroundColor: '#000',

     },
     FlexV1:{
        backgroundColor: '#ff801a',
        flexGrow: 1,
     },
     FlexV2:{
        backgroundColor: '#dd22c1',
        flexGrow: 1,
    },
    FlexV0:{
        backgroundColor: '#090',
        height: 200
     },
 }) 