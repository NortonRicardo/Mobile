import React, { useState } from 'react'
import { Button, Text, SafeAreaView } from 'react-native'
import Estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
       return (
        <>
            <If teste={usuario && Object.keys(usuario).length >= 2 }>
                <Text style={Estilo.fontG}> 
                    Usuario Logado:   
                </Text>
                <Text style={Estilo.fontG}> 
                    {usuario.nome} - { usuario.email}
                </Text>
            </If>
        </>
       )
 } 