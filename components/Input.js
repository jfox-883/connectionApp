import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import FONTS from '../constants/fonts'
import SIZES from '../constants/sizes'
import ICONS from '../constants/icons'


const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state
        case INPUT_CHANGE: 
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return{
                ...state,
                touched: true
            }
    }
}

const Input = props => {
    const { colors } = useTheme()
    const labelColor = props.labelColor
    const bottomPadding = props.bottomPadding
    const propsStyles = props.styles
    const styles = React.useMemo(() => createStyles(colors, labelColor, bottomPadding, propsStyles), [colors, labelColor, bottomPadding,propsStyles])
    const [inputState, dispatch] = React.useReducer(inputReducer, {
        value: props.initialValue || '',
        isValid: props.initialValid || false,
        touched: false,
    })
    const [showPass, setShowPass] = React.useState(false)

    const { onInputChange = () => {}, id } = props;

    React.useEffect(() => {
        if(inputState.touched){
            onInputChange(id, inputState.value, inputState.isValid)
        }
    },[inputState, onInputChange, id])


    const handleChangeText = (text) => {
        const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let isValid = true
        if(props.required && text.trim().length === 0) isValid = false
        if(props.email && !emailRegex.test(text.toLowerCase())) isValid = false
        if(props.minLength != null && text.length < props.minLength) isValid = false

        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid,
        })
    }

    const handleBlur = () => dispatch({ type: INPUT_BLUR})

    const handleShowPassword = () => setShowPass(!showPass)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleChangeText}
                    onBlur={handleBlur}
                    secureTextEntry={!showPass}
                    {...props}
                />
                {props.passIcon && (
                    <TouchableOpacity style={styles.showPassBtn} onPress={() => handleShowPassword()}>
                        <Image 
                            source={showPass == false ? ICONS.eye : ICONS.disableEye}
                            resizeMode='contain'
                            style={styles.showPassIcon}
                        />
                    </TouchableOpacity>
                )}
            </View>
            {!inputState.isValid && inputState.touched && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            )}
        </View>
    )
}

const createStyles = (colors, labelColor, bottomPadding, propsStyles) => StyleSheet.create({
    container: {
        paddingTop: SIZES.padding * 2,
        paddingBottom: SIZES.padding * bottomPadding
    },
    label: {
        color: labelColor,
        ...FONTS.h4
    },
    textInput: {
        marginBottom: SIZES.padding,
        height: 40,
        borderBottomColor: colors.background,
        borderBottomWidth: 1,
        color: colors.text,
        paddingLeft: SIZES.padding * 0.2,
        ...FONTS.body3,
        ...propsStyles
    },
    errorContainer: {
        marginVertical: SIZES.padding * 0.5
    },
    errorText: {
        color: colors.alert,
        ...FONTS.body5,
    },
    showPassBtn: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        height: 30,
        width: 30,
    },
    showPassIcon:{
        height: 20,
        width: 20,
        tintColor: colors.background,
    },
})

export default Input


