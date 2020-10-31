import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from '../estilo'


import ContadorDisplay from './contadorDisplay'
import ContadorBotes from './ContadorBotes'

export default props => {
    const [num, setNum] = useState(0)

    const inc_t = () => setNum(num + 1)
    const dec_t = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.fontG}>
                Contador
            </Text>

            <ContadorDisplay num={num} />

            <ContadorBotes inc={inc_t} dec={dec_t} />
        </>
    )
 } 