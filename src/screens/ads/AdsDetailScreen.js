import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { colors } from '../../utils'
import { useRoute } from '@react-navigation/native'
import { Height, Width } from '../../utils/responsive'

const AdsDetailScreen = () => {
    const route = useRoute()
    console.log({ route });
    return (
        <View style={style.mainContainer}>
            <Header title={"જાહેરાત"} isBack={true} />
            <Text style={style.text}>{route.params?.data.date}</Text>
            <Image source={route.params?.data.ads} style={style.img} resizeMode='contain' />
        </View>
    )
}

export default AdsDetailScreen

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    }, img: {
        height: Height(200),
        width: Width(360),
        borderRadius: Width(5),
        alignSelf: 'center'
    },text:{
        
    }
})