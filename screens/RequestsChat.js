import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header'

import GLOBAL_STYLES from '../constants/globalStyles'
import FONTS from '../constants/fonts'
import ICONS from '../constants/icons'
import SIZES from '../constants/sizes'

const RequestsChat = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header styles={{justifyContent: 'flex-start'}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Image 
                        source={ICONS.back}
                        resizeMode='contain'
                        style={{width: 20, height: 20, tintColor: colors.text}}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mensajes</Text>
            </Header>

            
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1,
    },
    backButton: {
        width: 30,
        height: 30,
        paddingTop: SIZES.padding,
        paddingRight: SIZES.padding * 2
    },
})

export default RequestsChat