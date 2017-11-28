import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'

class jokenpo extends Component{
  constructor(props){
    super(props);
    this.state = {escolhaDoUsuario : '', escolhaDaMaquina : '', resultado : ''}
  }

  jokenpoFunc(escolhaDoUsuario){
    var randonNumber = Math.floor(Math.random() * 3);
    var resultado = '';
    var escolhaDaMaquina = '';
    if ( randonNumber == 0){
      escolhaDaMaquina = 'pedra'
      //this.setState({escolhaDaMaquina : 'pedra'});
    }
    else if( randonNumber == 1){
      escolhaDaMaquina = 'papel'
      //this.setState({escolhaDaMaquina : 'papel'});
    }
    else if ( randonNumber == 2){
      escolhaDaMaquina = 'tesoura'
      //this.setState({escolhaDaMaquina : 'tesoura'});
    }

    if (escolhaDaMaquina == 'pedra'){
      if (escolhaDoUsuario == 'pedra'){
        resultado = 'Empate';
      }
      if (escolhaDoUsuario == 'papel'){
        resultado = 'Você ganhou';
      }
      if (escolhaDoUsuario == 'tesoura'){
        resultado = 'Você Perdeu';
      }
    }
    
    if (escolhaDaMaquina == 'papel'){
      if (escolhaDoUsuario == 'papel'){
        resultado = 'Empate';
      }
      if (escolhaDoUsuario == 'tesoura'){
        resultado = 'Você ganhou';
      }
      if (escolhaDoUsuario == 'pedra'){
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaDaMaquina == 'tesoura'){
      if (escolhaDoUsuario == 'tesoura'){
        resultado = 'Empate';
      }
      if (escolhaDoUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }
      if (escolhaDoUsuario == 'papel'){
        resultado = 'Você Perdeu';
      }
    }


    this.setState({escolhaDoUsuario : escolhaDoUsuario,
                   escolhaDaMaquina : escolhaDaMaquina,
                   resultado: resultado});
  }  
  render(){
    return(
      <View>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button 
              title='pedra'
              onPress={() => {this.jokenpoFunc('pedra')}}
            />
          </View >
          <View style={styles.btnEscolha}>
            <Button 
            title='papel' 
            onPress={() => {this.jokenpoFunc('papel')}}
            />
          </View>
          <View  style={styles.btnEscolha}>
            <Button 
            title='tesoura'
            onPress={() => {this.jokenpoFunc('tesoura')}}
            />
          </View>
           
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaDaMaquina} jogador='Compurador'></Icone>
          <Icone escolha={this.state.escolhaDoUsuario} jogador='Usuário'></Icone>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  
  },

  palco:{
    alignItems: 'center',
    //justifyContent: 'space-between',
    marginTop: 10
  },

  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color : 'red',
    height: 40

    //justifyContent: 'space-between',
    //marginTop: 10
  }

})





AppRegistry.registerComponent('jokenpo', () => jokenpo);
