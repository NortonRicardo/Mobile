import React, { useState } from 'react'
import { Button, Text, View, TextInput } from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
       return (
            <View> 
                <Text>Valor do imput: {nome}</Text>
                <TextInput 
                    placeholder='Digite Seu Nome.'
                    value ={nome}
                    onChangeText={nome => setNome(nome)}
                />
            </View>
       )
 } 