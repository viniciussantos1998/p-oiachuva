import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function welcome() {
    const navigation = useNavigation();
    return (
        <view Style= {styles.container}>
        <View>
            <Animatable.Image
            animation="flipIny"
            source={require('..assets/icon.png')}
            style={{width:'100%'}}
            resizeMode="contain"
            />

        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerform}>
            <text style={styles.title}>Monitore a chuva em qualquer lugar</text>
            <text style={styles.text}>Faça login para começar</text>
            <TouchableOpacity
             style={styles.button}
             onPress={() => navigation.navigate('Signin')}
             >

                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>

        </view>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4AB9D4',

    },
    containerLogo:{
        flex:2,
        backgroundColor:'#4AB9D4',
        justifyContent:'center',
        alignItems:'center',

    },
    containerForm:{
        flex:1,
        backgroundColor:'#4AB9D4',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',

    },
    title:{
        fontSize:24,
        fontweight:'bold',
        marginTop:28,
        marginBotton:12,
    },
    text:{
        color:'black',

    },
    button:{
        position:'absolute',
        backgroundColor:'#4AB9D4',
        borderRadius: 50,
        paddingVertical: 8,
        with: '60%',
        alignSelf: 'center',
        botton:'15%',
        alignItems:'center',
        justifyContent:'center',

    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
    }

})