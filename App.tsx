import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

const App: React.FC = () => (
    <ThemeProvider>
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    </ThemeProvider>
);

export default App;
