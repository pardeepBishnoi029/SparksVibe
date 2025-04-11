import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
                const iconName = icons[route.name]; // Use route.name instead of Tab.useRoute().name
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#5E60CE',
            tabBarInactiveTintColor: '#2D2D2D',
            headerShown: false, // Hide header for all tab screens
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tracker" component={TrackerScreen} />
        <Tab.Screen name="Awards" component={AwardsScreen} />
    </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
    </GestureHandlerRootView>
);

export default AppNavigator;
