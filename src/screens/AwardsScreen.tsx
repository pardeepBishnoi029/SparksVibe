import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import { saveData, getData } from '../utils/storage';
import { Themes } from '../config/themes';

const AwardsScreen: React.FC = () => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const loadStreak = async () => {
            const savedStreak = await getData(Constants.STORAGE_KEYS.STREAKS);
            if (savedStreak) setStreak(savedStreak);
        };
        loadStreak();

        // Simulate daily streak update (for demo)
        const updateStreak = async () => {
            const newStreak = streak + 1;
            setStreak(newStreak);
            await saveData(Constants.STORAGE_KEYS.STREAKS, newStreak);
        };
        const timer = setTimeout(updateStreak, 5000); // Update after 5s for demo
        return () => clearTimeout(timer);
    }, [streak]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Awards</Text>
            <Text style={styles.bodyText}>Current Streak: {streak} days</Text>
            {Constants.STREAK_MILESTONES.map((milestone) => (
                <Text
                    key={milestone}
                    style={[
                        styles.bodyText,
                        { color: streak >= milestone ? Themes[theme].success : Themes[theme].text },
                    ]}
                >
                    {milestone} Days: {streak >= milestone ? 'Achieved!' : 'Not yet'}
                </Text>
            ))}
        </View>
    );
};

export default AwardsScreen;
