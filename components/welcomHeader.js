import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const WelcomeHeader = ({text}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors])

    return (
        <View>
            <Text style={styles.heading}>Hola!</Text>
            <Text style={styles.subHeading}>{text}</Text>
        </View>
    )
}

const createStyles = (colors) => 
    StyleSheet.create({
        heading: {
            color: '#FFF',
            alignSelf: 'center',
            marginTop: SIZES.padding * 6,
            ...FONTS.largeTitle,
        },
        subHeading: {
            color: '#FFF',
            alignSelf: 'center',
            ...FONTS.body4,
        }
    });

export default WelcomeHeader
