import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.fontG}>
            O Valor {props.max} maior que o Valor {props.min}!
        </Text>
    )
}