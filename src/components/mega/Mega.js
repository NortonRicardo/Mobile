import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './Numero'


export default class Mega extends Component {
    
    state={ 
        qtNumeros: this.props.qtNumeros,
        numeros: []
    }

    // constructor(props){
    //     super(props)
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    // alterarQtdeNumero(qtde){
    //     this.setState({qtNumeros: qtde})
    // }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtNumeros: +qtde})
    }

    exibirNumeros = () =>
    {
        const nums = this.state.numeros
        return nums.map(num =>{
            return <MegaNumero num={num} />
        })
    }
    
    gerarNumeroNaoContido = nuns =>{
        const novo = parseInt(Math.random() * 60)+1
        return nuns.includes(novo) ? this.gerarNumeroNaoContido(nuns) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtNumeros)
                        .fill()
                        .reduce(nuns => [...nuns, this.gerarNumeroNaoContido(nuns)], [])
                        .sort((a, b) => a - b)
        this.setState({numeros: numeros})
    }
    
    render(){
        return(
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena 
                </Text>
                
                <TextInput 
                    keyboardType={ 'numeric'}
                    style={ {borderWidth: 1, marginTop: 7, borderRadius: 10, padding: 10}}
                    placeholder="Quantidade de numeros"
                    value ={this.state.qtNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />

                <Button
                title="Gerar"
                style={ {marginTop: 7, padding: 10} }
                onPress={this.gerarNumeros} />

                <View style={{
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}