import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import GLOBAL_STYLES from '../constants/globalStyles';
import SIZES from '../constants/sizes';
import FONTS from '../constants/fonts';
import ICONS from '../constants/icons';

import WelcomeHeader from '../components/welcomHeader';
import Logout from '../components/Logout';
import { checkUser } from '../store/actions/user.action';


const Login = ({navigation}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);
    const validated = useSelector(state => state.user.validated);
    const dispatch = useDispatch();

    const [loginUser, setLoginUser] = React.useState('')
    const [loginPass, setLoginPass] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)
    const [loginButtonDisable, setLoginButtonDisable] = React.useState(true)

    const handleValidatePass = (value) => {
        setLoginPass(value)
        loginPass.length > 1 ? setLoginButtonDisable(false) : setLoginButtonDisable(true)
    }

    const handleValidateUser = (user, pass) => {
        dispatch(checkUser(user,pass))
        validated === true ? navigation.navigate('MainTabs') : alert('Usuario o clave incorrectos!!!')
    }

    const LoginForm = () => {
        return (
            <View style={styles.loginForm}>
                <View style={styles.innerView}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize='none'
                        placeholder='ingresar el usuario'
                        placeholderTextColor={colors.dimmedText}
                        selectionColor={colors.dimmedText}
                        value={loginUser}
                        onChangeText={setLoginUser}
                    />
                </View>
                <View style={styles.innerView}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize='none'
                        placeholder='ingresar la contraseña'
                        placeholderTextColor={colors.dimmedText}
                        selectionColor={colors.dimmedText}
                        secureTextEntry={!showPass}
                        value={loginPass}
                        onChangeText={(value) => {
                            handleValidatePass(value)
                        }}
                    />
                    <TouchableOpacity style={styles.showPassBtn} onPress={() => setShowPass(!showPass)}>
                        <Image 
                            source={showPass == false ? ICONS.eye : ICONS.disableEye}
                            resizeMode='contain'
                            style={styles.showPassIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const LoginButton = () => {
        if(loginButtonDisable === false){
            return (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => handleValidateUser(loginUser, loginPass)} 
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
            style={{...GLOBAL_STYLES.container, backgroundColor: colors.primary}}    
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView>
                    <Logout tintColor='#FFF'/>
                    <WelcomeHeader text='Por favor indique su usuario y clave!' />
                    {LoginForm()}
                    {LoginButton()}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const createStyles = (colors) => StyleSheet.create({
    loginForm: {
        marginHorizontal: SIZES.padding * 6,
        marginTop: SIZES.padding * 3,
        paddingVertical: SIZES.padding * 3,
    },
    innerView: {
        paddingVertical: SIZES.padding * 2,
    },
    label: {
        color: '#FFF',
        ...FONTS.body3
    },
    textInput: {
        marginBottom: SIZES.padding,
        borderBottomWidth: 1,
        borderBottomColor: colors.card,
        height: 40,
        color: colors.background,
        ...FONTS.body3
    },
    showPassBtn: {
        position: 'absolute',
        right: 0,
        bottom: 25,
        height: 30,
        width: 30,
    },
    showPassIcon:{
        height: 20,
        width: 20,
        tintColor: colors.background,
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


