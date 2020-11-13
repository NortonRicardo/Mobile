import React, { useState } from 'react'
import { Button, Text, SafeAreaView, StyleSheet, View } from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
       return (
           <View style={style.Contanner}>
               <Text style={[Estilo.fontG, style.Num]}>
                {num}
               </Text>
            </View>
       )
 } 

 const style = StyleSheet.create({
     Contanner:{
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25
     },
     Num:{
         color: '#FFF'
     }
 })