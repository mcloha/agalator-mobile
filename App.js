import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ThemeProvider,
    defaultTheme,
    darkTheme,
} from '@react-native-material/core';
import { SearchBar, Scanner } from './src/components';

const Stack = createNativeStackNavigator();

const Root = () => (
    <View style={styles.root}>
        <SearchBar />
    </View>
);

const themes = {
    light: {
        name: 'light',
        palette: {
            default: 'rgba(100, 100, 100, .5)',
            primary: '#40A3D0',
            secondary: '#F5FF62',
        },
    },
    dark: {},
};

const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
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

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
});

export default App;
