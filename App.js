import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import { Cart, Scanner } from './src/pages';
import { main } from './src/assets/themes';
import ShopingListContext, {
    defaultValue,
} from './src/context/shopingListContext';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ThemeProvider theme={main}>
            <ShopingListContext.Provider value={defaultValue}>
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
            </ShopingListContext.Provider>
        </ThemeProvider>
    );
};

export default App;
