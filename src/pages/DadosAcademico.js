import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SimplesContext from '../contexts/SimplesProvider';
import { Input } from '../components/Input';
import { MyButton } from '../components/MyButton';


export function DadosAcademico({ navigation }) {
  
  const { escolaridade, setEscolaridade,  idioma, setIdioma,experiencia, setExperiencia } = useContext(SimplesContext)
  return (

    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Input placeholder="Nivel de Escolaridade" value={escolaridade} onChangeText={x => setEscolaridade(x)}/>
        <Input placeholder="Idioma" value={idioma} onChangeText={x => setIdioma(x)}/>
        <Input placeholder="Informe Experiência" value={experiencia} onChangeText={x => setExperiencia(x)}/>
        <MyButton title="Salvar" onPress={() => navigation.navigate('Detalhes')} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add',
  },
  containerInput: {
    width: "100%",
    marginTop: 240,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    top: -100,
  },

})