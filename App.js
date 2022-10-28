import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled, { ThemeProvider } from 'styled-components/native';
import { SearchBar, Scanner } from './src/components';

const Stack = createNativeStackNavigator();

const StyledRoot = styled.View`
    flex: 1;
    padding: 10px;
    background: ${props => props.theme.background};
`;

const Root = () => (
    <StyledRoot>
        <SearchBar />
    </StyledRoot>
);

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
                        name="Home"
                        component={Root}
                        options={{
                            title: 'Agalator',
                        }}
                    />
                    <Stack.Screen name="Scanner" component={Scanner} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
