import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
       return (
            <>
               <Text style={Estilo.fontG}>  {props.a} </Text>
               <Text style={Estilo.fontG}>  {props.b} </Text>
            </>
       )    
 } 