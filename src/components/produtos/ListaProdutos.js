import React, { useState } from 'react'
import { Button, Text, SafeAreaView } from 'react-native'
import Estilo from '../estilo'
import produtos from './Produtos'

import Produtos from './Produtos'

export default props => {
       return (
            <>
                <Text style={Estilo.fontG}> Lista de Produtos:</Text>
                {Produtos.map(p =>{
                    return <Text key={p.id}>{p.id}) {p.nome} {p.preco} </Text>
                })}
            </>
       )
 } 