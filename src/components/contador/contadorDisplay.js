import React, { useState } from 'react'
import { Button, Text, StyleSheet, View } from 'react-native'
import Estilo from '../estilo'

export default props => {
       return (
           <View style={[style.Display]}>
                <Text style={[Estilo.fontG, style.DisplayColor]}>
                    {props.num}
                </Text>
           </View>
       )
 } 

 const style = StyleSheet.create({
     Display: {
        backgroundColor: '#000',
        color: '#ffffff',
        padding: 20,
        width: 1000,
        borderRadius: 50
     },
     DisplayColor:{
        color: '#ffffff',
     }
 })
 