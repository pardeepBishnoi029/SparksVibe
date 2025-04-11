import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import { saveData, getData } from '../utils/storage';
import { Themes } from '../config/themes';

const TrackerScreen: React.FC = () => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);
    const [motivationLevel, setMotivationLevel] = useState(5);
    const [logs, setLogs] = useState<{ time: string; level: number }[]>([]);

    useEffect(() => {
        const loadLogs = async () => {
            const savedLogs = await getData(Constants.STORAGE_KEYS.MOTIVATION_LOGS);
            if (savedLogs) setLogs(savedLogs);
        };
        loadLogs();
    }, []);

    const logMotivation = async () => {
        const newLog = { time: new Date().toLocaleTimeString(), level: motivationLevel };
        const updatedLogs = [...logs, newLog];
        setLogs(updatedLogs);
        await saveData(Constants.STORAGE_KEYS.MOTIVATION_LOGS, updatedLogs);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Track Your Motivation</Text>
            <Text style={styles.bodyText}>Level: {motivationLevel}</Text>
            {Platform.OS === 'web' ? (
                <input
                    type="range"
                    min="1"
                    max={Constants.MAX_MOTIVATION_LEVEL}
                    value={motivationLevel}
                    style={{ width: '100%' }}
                />
            ) : (
                <Slider
                    minimumValue={1}
                    maximumValue={Constants.MAX_MOTIVATION_LEVEL}
                    step={1}
                    value={motivationLevel}
                    onValueChange={setMotivationLevel}
                    minimumTrackTintColor={Themes[theme].primary}
                    maximumTrackTintColor={Themes[theme].text}
                />
            )}
            <TouchableOpacity style={styles.button} onPress={logMotivation}>
                <Text style={styles.buttonText}>Log Motivation</Text>
            </TouchableOpacity>
            {logs.map((log, index) => (
                <Text key={index} style={styles.bodyText}>
                    {log.time}: {log.level}
                </Text>
            ))}
        </View>
    );
};

export default TrackerScreen;
