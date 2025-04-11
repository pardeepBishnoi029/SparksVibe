import { StyleSheet, Platform } from 'react-native';
import { Themes } from './themes';

export const createStyles = (theme: keyof typeof Themes) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Themes[theme].background,
            padding: 16,
        },
        heading: {
            fontFamily: 'PlayfairDisplay-Bold',
            fontSize: 24,
            color: Themes[theme].text,
        },
        quoteText: {
            fontFamily: 'PlayfairDisplay-Regular',
            fontSize: 20,
            color: Themes[theme].text,
            lineHeight: 28,
        },
        bodyText: {
            fontFamily: 'Inter-Regular',
            fontSize: 16,
            color: Themes[theme].text,
        },
        button: {
            backgroundColor: Themes[theme].primary,
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 8,
            minHeight: 48,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 8,
        },
        buttonText: {
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            color: '#FFFFFF',
        },
        card: {
            backgroundColor: Themes[theme].cardBackground,
            borderRadius: 12,
            padding: 16,
            marginVertical: 8,
            alignSelf: 'center',
            width: '100%',
            maxWidth: 400,
            ...(Platform.OS === 'web'
                ? { boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }
                : { shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 }),
        },
    });
