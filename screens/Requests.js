import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header'
import SelectModal from '../components/SelectModal'
import TypeOfRequestSelector from '../components/RequestsComponents/TypeOfRequestSelector'
import MessageInput from '../components/RequestsComponents/MessageInput'

import { getTypeOfRequest } from '../store/actions/typeOfRequest.action'
import { addRequests } from '../store/actions/requests.action'

import GLOBAL_STYLES from '../constants/globalStyles'
import FONTS from '../constants/fonts'
import ICONS from '../constants/icons'
import SIZES from '../constants/sizes'


const Requests = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    const dispatch = useDispatch()
    const typeOfRequests = useSelector(state => state.typeOfRequests.items)
    
    const [isVisible, setIsVisible] = React.useState(false)
    const [isChecked, setIsChecked] = React.useState(false)
    const [typeOfRequestValue, setTypeOfRequestValue] = React.useState('')
    const [message, setMessage] = React.useState('')
    

    const handleModalVisible = (value) => setIsVisible(value)
    const handleCloseModal = () => setIsVisible(false)
    const handleSelectedItem = (value) => {
        setTypeOfRequestValue(value)
        setMessage(value.template)
        setIsVisible(false)
    }
    const getDate = () => {
        let date = new Date()
        let day = date.getDay()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if(month < 10) return `${day}/0${month}/${year}`
        return `${day}/${month}/${year}`
    }
    const getTime = () => {
        let time = new Date()
        let hours = time.getHours()
        let minutes = time.getMinutes()
        
        return `${hours}:${minutes}`
    }
    const handleSendButton = () => {
        if(!typeOfRequestValue || !message ) {
            Alert.alert('Campos Requeridos', 'Los campos no deben estar vacios', [{text: 'Ok'}])
            return null
        }
        const item = {
            id: Math.random().toString(),
            title: typeOfRequestValue.title,
            msj: message,
            typeMsj: 0,
            date: getDate(),
            time: getTime(),
            status: 0
        }
        dispatch(addRequests('1',item))
        navigation.navigate('MainTabs')
    }


    React.useEffect(() => {
        dispatch(getTypeOfRequest())
    })


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
                <Text style={styles.headerTitle}>Solicitud de Trámite</Text>
            </Header>
            
            <ScrollView style={styles.form}>
                <TypeOfRequestSelector 
                    handleDropdownButton={() => handleModalVisible(!isVisible)}
                    value={typeOfRequestValue.title}
                    initialValue=''
                    label='Tipo de Solicitud'
                    placeholder='Seleccione...'
                    placeholderTextColor={colors.dimmedText}
                    editable={false}
                />
                <MessageInput 
                    onChangeText={value => setMessage(value)}
                    value={message}
                    label='Mensaje'
                    placeholder='Indique un mensaje...'
                    placeholderTextColor={colors.dimmedText}
                />

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            source={isChecked ? ICONS.check : ICONS.unCheck}
                            style={{width: 20, height: 20, tintColor: colors.text}}
                        />
                        <Text style={styles.checkText}>Notificar al Responsable del área</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical: SIZES.padding * 2}}>
                    <TouchableOpacity style={styles.sendButton} onPress={() => handleSendButton()}>
                        <Image 
                            source={ICONS.send}
                            style={styles.sendIcon}
                        />
                        <Text style={styles.sendText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                <SelectModal 
                    items={typeOfRequests}
                    isVisible={isVisible}
                    handleCloseModal={handleCloseModal}
                    handleSelectedItem={handleSelectedItem}
                />
            </ScrollView>
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
    form: {
        paddingHorizontal: SIZES.padding * 1.5,
        paddingVertical: SIZES.padding 
    },
    dropdownList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.card
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: colors.primary,
        top: 17
    },
    checkboxContainer: {
        paddingVertical: SIZES.padding * 2,
        borderColor: colors.card,
        borderBottomWidth: 0.8,
        borderTopWidth: 0.8
    },
    checkText: {
        color: colors.text,
        paddingLeft: SIZES.padding,
        ...FONTS.body3
    },
    sendButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.success,
        borderRadius: SIZES.radius * 0.5,
        height: 60
    },
    sendIcon: {
        width: 25,
        height: 25,
        tintColor: '#FFF'
    },
    sendText: {
        color: '#FFF',
        paddingLeft: SIZES.padding,
        ...FONTS.body2
    }
})

export default Requests