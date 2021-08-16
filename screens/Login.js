import React from 'react'
import { StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform, 
    TextInput, 
    Image, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native'
import Constants from 'expo-constants';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import GLOBAL_STYLES from '../constants/globalStyles';
import SIZES from '../constants/sizes';
import FONTS from '../constants/fonts';

import WelcomeHeader from '../components/welcomHeader';
import Input from '../components/Input';

import { checkUser } from '../store/actions/user.action';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }

        let updatedFormIsValid = true
        for(const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }

        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        }
    }
    return state
}

const Login = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);
    const validated = useSelector(state => state.user.validated);
    const [error, setError] = React.useState(null)
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = React.useReducer(formReducer, {
        inputValues: {
            user: '',
            password: '',
        },
        inputValidities: {
            user: false,
            password: false,
        },
        formIsValid: false,
    })

    React.useEffect(() => {
        if(error) {
            Alert.alert('Ha ocurrido un error', error, [{ text: 'OK'}])
        }
    },[error])

    const handleInputChange = React.useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            input: inputIdentifier,
            value: inputValue,
            isValid: inputValidity
        })
    },[dispatchFormState])


    const handleValidateUser = (user, pass) => {
        dispatch(checkUser(user,pass))
    }

    const LoginForm = () => {
        return (
            <View style={styles.loginForm}>
                <Input 
                    id='user'
                    label='Usuario'
                    autoCapitalize='none'
                    placeholder='ingresar el usuario'
                    placeholderTextColor={colors.dimmedText}
                    onInputChange={handleInputChange}
                    initialValue=''
                    required
                    errorText='Usuario requerido'
                    secureTextEntry={false}
                    labelColor='#FFF'
                    bottomPadding='2'
                    styles={{color: colors.background}}
                />
                <Input 
                    id='password'
                    label='Contraseña'
                    autoCapitalize='none'
                    placeholder='ingresar su contraseña'
                    placeholderTextColor={colors.dimmedText}
                    onInputChange={handleInputChange}
                    required
                    minLength={4}
                    password={true}
                    passIcon={true}
                    errorText='La contraseña requerida'
                    labelColor='#FFF'
                    bottomPadding='2'
                    styles={{color: colors.background}}
                />
            </View>
        )
    }

    const LoginButton = () => {
        if(formState.formIsValid === true){
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => handleValidateUser(formState.inputValues.user, formState.inputValues.password)} 
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={50}
            style={{...GLOBAL_STYLES.container, ...styles.loginContainer}}    
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>
                    <WelcomeHeader text='Por favor indique su usuario y clave!' />
                    {LoginForm()}
                    {LoginButton()}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const createStyles = (colors) => StyleSheet.create({
    loginContainer: {
        backgroundColor: colors.primary,
        paddingTop: (Platform.OS === 'android') ? Constants.statusBarHeight : 0
    },
    loginForm: {
        marginHorizontal: SIZES.padding * 6,
        marginTop: SIZES.padding * 3,
        paddingVertical: SIZES.padding * 3,
    },
    buttonContainer: {
        marginHorizontal: SIZES.padding * 6,
        marginVertical: SIZES.padding * 3,
    },
    button: {
        height: 60,
        backgroundColor: colors.background,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    buttonText: {
        color: colors.text,
        ...FONTS.h3
    },
});

export default Login


