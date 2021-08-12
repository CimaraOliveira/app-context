import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SimplesContext from '../contexts/SimplesProvider';
import { Input } from '../components/Input';
import { MyButton} from '../components/MyButton';

export function DadosPessoais({ navigation }) {
  const { nome, setNome, cpf, setCpf, email, setEmail } = useContext(SimplesContext)
  return (

    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Input placeholder="Informe Nome" value={nome} onChangeText={x => setNome(x)}/>
        <Input placeholder="Informe CPF" value={cpf} onChangeText={x => setCpf(x)} keyboardType='numeric'/>
        <Input placeholder="Informe E-mail" value={email} onChangeText={x => setEmail(x)}/>
        <MyButton title="Próximo" onPress={() => navigation.navigate('DadosAcademico')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    flex: 1,
    backgroundColor: 'orange'
  },
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
