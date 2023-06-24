import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../../utils/responsive'
import { colors } from '../../utils'
import imageConstant from '../../helper/imageConstant'
import iconConstant from '../../helper/iconConstant'

const DonorSubCardView = ({ name, donor, donorby, donorName, village }) => {
    return (
        <View style={{ marginTop: Height(30) }}>
            <View style={style.mainContainer}>
                <Image source={imageConstant.donor} style={style.image} />
                <View>
                    <Text style={style.subText}>{donor}</Text>
                    <Text style={style.subText}>{donorby}</Text>
                    <Text style={style.subText}>{donorName}</Text>
                    <View style={style.rowView}>
                        <Image source={iconConstant.ic_newLocation} style={style.icon} />
                        <Text style={style.rowText}>{village}</Text>
                    </View>
                </View>
            </View>
            <View style={style.subContainer}>
                <Text style={style.text}>{name}</Text>
            </View>
        </View>
    )
}

export default DonorSubCardView

const style = StyleSheet.create({
    mainContainer: {
        height: Height(142),
        width: Width(360),
        alignSelf: 'center',
        borderRadius: Width(10),
        borderWidth: Height(1),
        marginTop: Height(30),
        borderColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(15),
        paddingTop: Height(10)
    }, subContainer: {
        height: Height(45),
        width: Width(300),
        backgroundColor: colors.primary,
        borderRadius: Width(5),
        alignSelf: 'center',
        position: 'absolute',
        marginTop: Height(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: Height(20),
        fontWeight: '400',
        color: colors.primaryWhite
    },
    subText: {
        fontSize: Height(10),
        color: colors.gray,
        marginTop: Height(5)
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(5)
    }, rowText: {
        fontSize: Height(10),
        fontWeight: '500',
        marginLeft: Width(10)
    },
    icon: {
        height: Height(10),
        width: Width(8)
    },
    image: {
        height: Height(75),
        width: Width(75),
        resizeMode: 'contain',
        marginRight: Width(5)
    }
})