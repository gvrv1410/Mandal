import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import { colors } from '../../utils'
import iconConstant from '../../helper/iconConstant'
import { Height, Width } from '../../utils/responsive'

const DirectorCardView = ({ name, familyCode, wpNumber, onImagePress, profile, onPress }) => {
    return (
        <DropShadow style={style.shadow}>
            <TouchableOpacity style={style.mainContainer} onPress={onPress}>
                <View style={style.subContainer}>
                    <TouchableOpacity onPress={onImagePress}>
                        <Image source={profile} style={style.image} />
                    </TouchableOpacity>
                    <View style={[style.rowContainer, { marginTop: Height(10) }]}>
                        <Image source={iconConstant.ic_callD} style={style.icon} />
                        <Image source={iconConstant.ic_whatsapp} style={[style.icon, { marginLeft: Width(10) }]} />
                    </View>
                </View>
                <View style={style.rowSubContainer}>
                    <Text style={style.text}>{name}</Text>
                    <Text style={style.subText}>{familyCode}</Text>
                    <Text style={style.wpText}>{wpNumber}</Text>
                </View>
            </TouchableOpacity>
        </DropShadow>
    )
}

export default DirectorCardView

const style = StyleSheet.create({
    shadow: {
        shadowColor: colors.gray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    }, mainContainer: {
        height: Height(100),
        width: Width(360),
        backgroundColor: colors.primaryWhite,
        borderRadius: Width(5),
        alignSelf: 'center',
        marginTop: Height(30),
        paddingHorizontal: Width(26),
        flexDirection: 'row',
        alignItems: 'center'
    }, image: {
        height: Height(40),
        width: Height(40),
        borderRadius: Height(40) / 2,
        resizeMode: 'contain'
    }, icon: {
        height: Height(10),
        width: Width(10),
        resizeMode: 'contain'
    }, rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }, subContainer: {
        alignItems: 'center'
    }, rowSubContainer: {
        marginLeft: Width(30)
    }, text: {
        fontSize: Height(15),
        color: colors.primaryBlack
    }, subText: {
        fontSize: Height(10),
        color: colors.gray
    }, wpText: {
        color: colors.primary,
        marginTop: Height(5),
        fontSize: Height(12)
    }
})