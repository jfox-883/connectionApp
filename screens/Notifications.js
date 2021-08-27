import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Header from '../components/Header';
import RenderNotificationsList from '../components/RenderNotificationsList';

import { NOTIFICACIONES } from '../mock-data/notificaciones'

import GLOBAL_STYLES from '../constants/globalStyles';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const Notifications = () => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Novedades</Text>
            </Header>
                <FlatList 
                    data={NOTIFICACIONES}
                    keyExtractor={item => `${item.id}`}
                    renderItem={data => <RenderNotificationsList data={data} />}
                    contentContainerStyle={{paddingBottom: SIZES.padding * 10}}
                />
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