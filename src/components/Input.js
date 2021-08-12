import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

export function Input({ placeholder, onPress, onChangeText, ...rest }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder={placeholder}
        {...rest}
        onChangeText={onChangeText} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '95%',
    height: 60,
    top: -50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
   
  },
  inputText: {
    flex: 1,
    height: '100%',
    width: "95%",
    backgroundColor: '#F1F5F4',
    paddingLeft: 10,
    fontSize: 17,
    borderRadius: 6,
    padding: 4,
    borderWidth: 2,
    borderColor: '#008b8b'
  },

});