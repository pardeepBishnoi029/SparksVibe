import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { createStyles } from '../config/styles';
import { Constants } from '../config/constants';
import { Themes } from '../config/themes';

const SplashScreen: React.FC = () => {
    const { theme } = React.useContext(ThemeContext);
    const styles = createStyles(theme);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => navigation.navigate('Main' as never), 2000);
    }, [navigation]);

    return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[styles.heading, { fontFamily: 'Inter-Bold', color: Themes[theme].primary, fontSize: 28 }]}>
                {Constants.APP_NAME}
            </Text>
        </View>
    );
};

export default SplashScreen;
