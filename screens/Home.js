import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Header from '../components/Header';

import GLOBAL_STYLES from '../constants/globalStyles';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const Home = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <SafeAreaView style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Mensajería</Text>
            </Header>
        </SafeAreaView>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1
    }
})

export default Home
