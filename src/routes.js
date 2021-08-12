import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Detalhes} from './pages/Detalhes';
import {DadosPessoais} from './pages/DadosPessoais';
import {DadosAcademico } from './pages/DadosAcademico';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DadosPessoais'
                component={DadosPessoais}
                options={{
                    title: 'Dados Pessoais', headerTitleStyle: {
                        fontSize: 25,
                        color: '#5f9ea0',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    },
                }} />
            <Stack.Screen name='DadosAcademico'
                component={DadosAcademico} options={{
                    title: 'Dados Acadêmicos', headerTitleStyle: {
                        fontSize: 25,
                        color: '#5f9ea0',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    },
                }} />
            <Stack.Screen name='Detalhes' component={Detalhes} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}