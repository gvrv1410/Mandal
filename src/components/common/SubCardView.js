import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../../utils/responsive'
import { colors } from '../../utils'
import imageConstant from '../../helper/imageConstant'

const SubCardView = ({ name, village, city, dob, address, group, mob, isGroup, isMob, isDob, height }) => {
    return (
        <View style={{ marginTop: Height(30) }}>
            <View style={style.view}>
                <View style={[style.mainContainer, { height: height }]}>
                    <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>નામ : </Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{name}</Text>
                    </View>
                    <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>ગામ :</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{village}</Text>
                    </View>
                    <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>શહેર :</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{city}</Text>
                    </View>
                    {isGroup && <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>બ્લડ ગ્રુપ :</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{group}</Text>
                    </View>}
                    {isMob && <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>મોબાઈલ નં.</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{mob}</Text>
                    </View>}
                    {isDob && <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>જન્મતારીખ :</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{dob}</Text>
                    </View>}
                    <View style={style.rowView}>
                        <Text style={[style.text, { width: Width(70) }]}>રહેઠાણ :</Text>
                        <Text style={[style.text, { width: Width(170), marginLeft: Width(10) }]}>{address}</Text>
                    </View>
                </View>
                <View style={style.imageView}>
                    <Image source={imageConstant.profile} style={style.image} />
                </View>
            </View>
        </View>
    )
}

export default SubCardView

const style = StyleSheet.create({
    mainContainer: {
        // height: Height(200),
        width: Width(328),
        borderRadius: Width(10),
        borderWidth: Height(1),
        borderColor: colors.primary,
        marginLeft: Width(50),
        paddingLeft: Width(60),
        justifyContent: 'center'
    }, imageView: {
        height: Height(78),
        width: Height(78),
        borderRadius: Height(78) / 2,
        backgroundColor: colors.primaryWhite,
        borderWidth: Height(1),
        justifyContent: 'center',
        position: 'absolute',
        marginLeft: Width(15)
    }, image: {
        height: Height(76),
        width: Height(76),
        borderRadius: Height(76) / 2,
    }, view: {
        justifyContent: 'center'
    }, rowView: {
        flexDirection: 'row',
        marginTop: Height(10)
    }, text: {
        fontSize: Height(15),
        fontWeight: '400',
        color: colors.primaryBlack
    }
})