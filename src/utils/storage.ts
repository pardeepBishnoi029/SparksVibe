import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export const saveData = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        if (Platform.OS === 'web') {
            localStorage.setItem(key, jsonValue);
        } else {
            await AsyncStorage.setItem(key, jsonValue);
        }
    } catch (e) {
        console.error('Storage save error:', e);
    }
};

export const getData = async (key: string) => {
    try {
        if (Platform.OS === 'web') {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } else {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        }
    } catch (e) {
        console.error('Storage get error:', e);
        return null;
    }
};
