import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Quotes } from '../config/staticData';
import { saveData, getData } from '../utils/storage';
import { Constants } from '../config/constants';

const QuoteCard: React.FC = () => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

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
        <View style={styles.card}>
            <Text style={styles.quoteText}>"{quote.text}"</Text>
            <Text style={[styles.bodyText, { textAlign: 'right', marginTop: 8 }]}>- {quote.author}</Text>
            <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={nextQuote}>
                <Text style={styles.buttonText}>Next Quote</Text>
            </TouchableOpacity>
        </View>
    );
};

export default QuoteCard;
