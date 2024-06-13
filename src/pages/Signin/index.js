import React from "react";
import { View, Text, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Signin() {
    return (
        <view style={atyles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <text style={styles.message}>Bem-vindo(a)</text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <text style={styles.title}>Email</text>
                <textInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />
                <text style={styles.title}>Senha</text>
                <textInput
                    placeholder="Sua senha"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastres-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </view>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4AB9D4',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#4AB9D4',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4AB9D4',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: 'black'
    }

})