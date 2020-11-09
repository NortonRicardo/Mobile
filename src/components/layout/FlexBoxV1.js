import React, { useState } from 'react'
import { Button, Text, SafeAreaView, StyleSheet, View } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
       return (
           <View style={style.FlexV1}> 
            <Quadrado/>
            <Quadrado cor="#F00"/>
            <Quadrado cor="#090"/>
            <Quadrado cor="#009"/>
           </View>
       )
 } 

 const style = StyleSheet.create({
     FlexV1:{
         backgroundColor: '#ff801a',
         flex: 1,
         justifyContent: "center"
     }
 })