import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { colors } from '../../utils'
import imageConstant from '../../helper/imageConstant'
import { Height, Width } from '../../utils/responsive'
import DropShadow from 'react-native-drop-shadow'

const NotificationDetailScreen = () => {
    return (
        <View style={style.mainContainer}>
            <Header title={"સૂચનાઓ"} isBack={true} />
            <DropShadow style={style.shadow}>

                <View style={style.view}>
                    <View style={style.subView}>
                        <Image source={imageConstant.donor} style={style.image} />
                        <Text style={style.text}>
                            જઓ ÝવÝથતાપૂવŏક પડો, જ ે થી તેઓ આનંદ મેળવવા માટ ે ેકામ કરી શકેઅને દુ: ખ, કેટલાક મહાન. કારણ કે, જમ આપણે સૌથી નાના વÝતુઓ સાથે આવે છ ે ે, જેઅમે કેટલાક લાભ મેળવવા ￹સવાય, તે હંમેશા દુઃખદાયક શારીœરક òવૃિİ લે છેઆમાંથી; પરંતુ કોઈ ભૂલ શોધવાનો અિધકાર છે, જેએકનો આનંદ માણી શકેછેઆનંદ કેનકામી પœરણામ નથી, અથવા જેતે પીડા ટાળે છેકેતે નથી પœરણામી આનંદ પેદા કરેછે?
                        </Text>
                    </View>
                    <Text style={style.subText}>
                        ૦૪ એપ્રિલ,૨૦૨૩ | ૧૦ : ૩૦ AM
                    </Text>
                </View>
            </DropShadow>
        </View>
    )
}

export default NotificationDetailScreen

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    }, image: {
        height: Height(180),
        width: Width(340),
        borderRadius: Width(5),
        alignSelf: 'center'
    }, subView: {

    }, view: {
        backgroundColor: colors.primaryWhite,
        marginHorizontal: Width(16), paddingHorizontal: Width(15),
        paddingVertical: Height(15),
        marginTop: Height(30)
    }, shadow: {
        shadowColor: colors.gray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    }, text: {
        fontSize: Height(15),
        textAlign: 'left',
        color: colors.gray,
        marginTop: Height(20)
    }, subText: {
        fontSize: Height(10),
        textAlign: 'right',
        color: colors.gray,
        marginTop: Height(35)
    }
})