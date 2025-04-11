import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import QuoteTile from '../components/QuoteTile';
import { Quotes } from '../config/staticData';
import { saveData, getData } from '../utils/storage';

const HomeScreen: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(theme);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [welcomeName] = useState('Pardeep'); // Default name; replace with dynamic logic if needed
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        const loadQuoteIndex = async () => {
            const savedIndex = await getData(Constants.STORAGE_KEYS.QUOTES);
            if (savedIndex !== null) setCurrentQuoteIndex(savedIndex);
        };
        loadQuoteIndex();
    }, []);

    const nextQuote = async () => {
        const newIndex = (currentQuoteIndex + 1) % Quotes.length;
        setCurrentQuoteIndex(newIndex);
        await saveData(Constants.STORAGE_KEYS.QUOTES, newIndex);
    };

    const quote = Quotes[currentQuoteIndex];

    return (
        <View style={[styles.container, { backgroundColor: '#E6E6FA' }]}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>
                    Hi, {welcomeName} {currentDate}
                </Text>
                <Text style={styles.timeText}>{currentTime}</Text>
                <View style={styles.iconPlaceholder} />
            </View>
            <QuoteTile quote={quote.text} author={quote.author} onNext={nextQuote} />
        </View>
    );
};

export default HomeScreen;
