import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {
    
    state={ 
        qtNumeros: this.props.qtNumeros
    }

    // constructor(props){
    //     super(props)
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtNumeros: qtde})
    }

    
    render(){
        return(
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena 
                </Text>
                <Text style={Estilo.fontM}>
                    {this.state.qtNumeros}
                </Text>

                <TextInput 
                    keyboardType={ 'numeric'}
                    style={ {borderWidth: 1, marginTop: 7, borderRadius: 10, padding: 10}}
                    placeholder="Quantidade de numeros"
                    value ={this.state.qtNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}