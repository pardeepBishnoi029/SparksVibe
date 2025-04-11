// src/navigation/AppNavigator.tsx
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import TrackerScreen from '../screens/TrackerScreen';
import AwardsScreen from '../screens/AwardsScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const icons: { [key: string]: string } = {
                    Home: 'home',
                    Tracker: 'trending-up',
                    Awards: 'star',
                };
                return <Icon name={icons[route.name]} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#5E60CE',
            tabBarInactiveTintColor: '#2D2D2D',
            headerShown: Platform.OS === 'web' ? false : undefined, // Explicitly handle web
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tracker" component={TrackerScreen} />
        <Tab.Screen name="Awards" component={AwardsScreen} />
    </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AppNavigator;
