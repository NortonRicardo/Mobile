import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    const delta = props.max - props.min + 1
    const Aleatorio = parseInt(Math.random() * delta) +  props.min
    return (
        <Text style={Estilo.fontG}>
            Numero de Aleatorio é {Aleatorio}
        </Text>
    )
}