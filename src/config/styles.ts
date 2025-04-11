import { StyleSheet, Platform } from 'react-native';
import { Themes } from './themes';

export const createStyles = (theme: keyof typeof Themes) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Themes[theme].background,
            padding: 16,
            paddingTop: 67,
        },
        heading: {
            fontFamily: 'Inter-Bold',
            fontSize: 24,
            color: Themes[theme].text,
        },
        quoteText: {
            fontFamily: 'Inter-Regular',
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
        // Flattened header styles
        header: {
            padding: 16,
            backgroundColor: '#D8BFD8', // Slightly darker purple
            borderRadius: 8,
            marginBottom: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        welcomeText: {
            fontFamily: 'Inter-Bold',
            fontSize: 18,
            color: '#FFFFFF',
        },
        timeText: {
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            color: '#FFFFFF',
        },
        iconPlaceholder: {
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: '#FFA07A', // Orange circle placeholder
        },
        // Flattened quote tile styles
        tileContainer: {
            backgroundColor: '#1A1B2E', // Dark background
            padding: 20,
            borderRadius: 12,
            marginVertical: 16,
            alignSelf: 'center',
            width: '100%',
            maxWidth: 400,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 5,
        },
        tileQuoteText: {
            fontFamily: 'Inter-Bold', // Or 'Inter-ExtraBold' if available
            fontSize: 40, // Increased for attention
            color: '#E0E0FF',
            textAlign: 'center',
            lineHeight: 52, // Adjusted for larger text
        },
        tileAuthorText: {
            fontFamily: 'Inter-Medium',
            fontSize: 18, // Increased for balance
            color: '#B0B0D4',
            textAlign: 'right', // Changed to center for symmetry
            marginTop: 16,
        },
        tileNextButton: {
            backgroundColor: '#5E60CE',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            marginTop: 16,
            alignSelf: 'center',
        },
        tileNextButtonText: {
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            color: '#FFFFFF',
        },
    });
