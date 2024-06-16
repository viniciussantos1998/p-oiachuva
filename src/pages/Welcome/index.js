import React from "react";
import { View,
     Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from "react-native";

 import * as animatable from 'react-native-animatable'

 import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <View style = {styles.containerLogo}>
                <animatable.Image
                animation="flipInY"
                source={require('../assets/logo.png')}
                style={{width:'100%'}}
                resizeMode="contain"
                />
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore a chuva em qualquer lugar </Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
    },
    containerForm:{
        flex:1,
        backgroundColor:'#4AB9D4',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 28,
        marginBotton: 12,
    },
    text:{
        color:'#FFF',

    },
    button:{
        position:'absolute',
        backgroundColor:'#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',

    },
    buttonText:{
        fontSize: 18,
        color:'black',
        fontWeight:'bold',
    }
})