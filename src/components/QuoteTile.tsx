import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';

const QuoteTile: React.FC<{ quote: string; author: string; onNext: () => void }> = ({ quote, author, onNext }) => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.tileContainer}>
            <Text style={styles.tileQuoteText}>{quote}</Text>
            <Text style={styles.tileAuthorText}>- {author}</Text>
            <TouchableOpacity style={styles.tileNextButton} onPress={onNext}>
                <Text style={styles.tileNextButtonText}>Next Quote</Text>
            </TouchableOpacity>
        </View>
    );
};

export default QuoteTile;
