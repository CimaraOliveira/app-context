import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimplesContext from '../contexts/SimplesProvider';

export function Detalhes() {
  const { nome, cpf, email, escolaridade, idioma, experiencia } = useContext(SimplesContext)
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Nome:{nome}</Text>
        <Text style={styles.texto}>CPF: {cpf}</Text>
        <Text style={styles.texto1}>E-mail: {email}</Text>
        <Text style={styles.texto2}>Nivel Escolar: {escolaridade}</Text>
        <Text style={styles.texto3}>Idioma: {idioma}</Text>
        <Text style={styles.texto4}>Experiência:  {experiencia}</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add',
  },
  containerInput: {
    marginTop: 440,
    alignItems: 'center',
    top: -200,
    flexDirection: "column",
    padding: 10,

  },
  text: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -62,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -79,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto1: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto2: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -70,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto3: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -84,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto4: {
    fontSize: 20,
    color: '#000',
    top: -120,
    left: -85,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

})