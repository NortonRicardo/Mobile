import React, { useState } from 'react'
import { Button, Text, FlatList, SafeAreaView } from 'react-native'
import Estilo from '../estilo'
import produtos from './Produtos'

import Produtos from './Produtos'

export default props => {
    const produtosRender = ({item: p}) =>{
        return <Text> {p.id}) {p.nome} </Text>
    }

       return (
            <>
                <Text style={Estilo.fontG}> Lista de Produtos V2:</Text>

                {/* <FlatList
                    data={produtos}
                    keyExtractor={i => i.id }
                    renderItem={({item: p}) =>{
                        return <Text> {p.id}) {p.nome} </Text>
                    }}
                /> */}

                <FlatList
                    data={produtos}
                    keyExtractor={i => i.id }
                    renderItem={produtosRender}
                />
            </>
       )
 } 