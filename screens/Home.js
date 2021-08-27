import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import RenderRequestsList from '../components/RenderRequestsList';

import { getRequests } from '../store/actions/requests.action';

import GLOBAL_STYLES from '../constants/globalStyles';
import SIZES from '../constants/sizes';
import ICONS from '../constants/icons';
import FONTS from '../constants/fonts';


const Home = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    const requestsData = useSelector(state => state.requests.list);
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getRequests(1))
     }, [requestsData])

    return (
        <SafeAreaView style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Mensajería</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Requests')}
                >
                    <Image 
                        source={ICONS.pen}
                        resizeMode='contain'
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </Header>
            {requestsData.length !== 0
                ? <FlatList 
                    data={requestsData}
                    keyExtractor={item => `${item.id}`}
                    renderItem={data => <RenderRequestsList data={data} navigation={navigation}/>}
                    contentContainerStyle={{paddingBottom: SIZES.padding * 10}}
                />
                : <View style={styles.initialView}><Text style={styles.initialText}>No hay trámites para mostrar...</Text></View>
            }
            
        </SafeAreaView>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1
    },
    button: {
        backgroundColor: colors.card,
        borderColor: colors.dimmedText,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        top: 5,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    buttonIcon:{
        width: 15,
        height: 15,
        tintColor: colors.dimmedText
    },
    initialView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: SIZES.padding * 10
    },
    initialText: {
        color: colors.Text,
        ...FONTS.body2
    }
})

export default Home
