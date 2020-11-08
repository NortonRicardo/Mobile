import React, { useState } from 'react'
import { Button, Text, SafeAreaView } from 'react-native'
import Estilo from '../estilo'

export default props => {
       return (
            <Text style={Estilo.fontG}> 
                {props.nome} {props.sobrenome}
            </Text>
       )
 } 