import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import { Cart, Scanner } from './src/pages';

const Stack = createNativeStackNavigator();

const mainTheme = {
    primary: '#25316D',
    secondary: '#5DA7DB',
    additional: '#BCCEF8',
    disbled: '#CDFCF6',
    background: '#FAF7F0',
};

const App = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                            title: 'Cart',
                        }}
                    />
                    <Stack.Screen name="Scanner" component={Scanner} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
