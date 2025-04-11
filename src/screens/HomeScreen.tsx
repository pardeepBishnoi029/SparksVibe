import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import QuoteCard from '../components/QuoteCard';
import { Themes } from '../config/themes';

const HomeScreen: React.FC = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, { fontFamily: 'PlayfairDisplay-Bold', color: Themes[theme].primary, fontSize: 24 }]}>
                {Constants.APP_NAME}
            </Text>
            <QuoteCard />
            <TouchableOpacity style={styles.button} onPress={toggleTheme}>
                <Text style={styles.buttonText}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
