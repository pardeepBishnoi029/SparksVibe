import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'; // Changed to TouchableWithoutFeedback for the whole tile
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';

const QuoteTile: React.FC<{ quote: string; author: string; onNext: () => void }> = ({ quote, author, onNext }) => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <TouchableWithoutFeedback onPress={onNext}>
            <View style={styles.tileContainer}>
                <Text style={styles.tileQuoteText}>{quote}</Text>
                <Text style={styles.tileAuthorText}>- {author}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default QuoteTile;
