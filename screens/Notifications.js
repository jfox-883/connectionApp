import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Header from '../components/Header';

import GLOBAL_STYLES from '../constants/globalStyles';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const Notifications = () => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Notificaciones</Text>
            </Header>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1
    }
})

export default Notifications