import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import { Themes } from '../config/themes';

interface MotivationTrackerProps {
    onLog: (level: number) => void;
}

const MotivationTracker: React.FC<MotivationTrackerProps> = ({ onLog }) => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);
    const [motivationLevel, setMotivationLevel] = useState(5);

    const handleLog = () => {
        onLog(motivationLevel);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.bodyText}>Motivation Level: {motivationLevel}</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleLog}>
                <Text style={styles.buttonText}>Log</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MotivationTracker;
