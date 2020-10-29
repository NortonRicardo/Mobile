import React from 'react'
import { Button } from 'react-native'

import Estilo from './estilo'

export default props => {
    function executar(){
        console.warn('Excut!!!')
    }
    return (
        <>
            <Button 
                title="Executar 1" 
                onPress={executar}
            />

            <Button 
                title="Executar 2" 
                onPress={executar}
            />
        </>
    )
}