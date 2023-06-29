import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { colors } from '../../utils'
import { noti } from '../../helper/dummyData'
import DropShadow from 'react-native-drop-shadow'
import imageConstant from '../../helper/imageConstant'
import { Height, Width } from '../../utils/responsive'
import { useNavigation } from '@react-navigation/native'

const NotificationScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={style.mainContainer}>
            <Header title={"સૂચનાઓ"} isBack={true} />
            <FlatList
                data={noti}
                renderItem={({ item }) => {
                    return (
                        <DropShadow style={style.shadow}>
                            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('NotificationDetail', { data: item })}>
                                <View style={style.rowView}>
                                    <View>
                                        <Image source={imageConstant.donor} />
                                    </View>
                                    <View>
                                        <Text style={style.text}>{item.title}</Text>
                                    </View>
                                </View>
                                <Text style={style.bottomText}>{item.date}</Text>
                            </TouchableOpacity>
                        </DropShadow>
                    )
                }}
            />
        </View>
    )
}

export default NotificationScreen

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    }, shadow: {
        shadowColor: colors.gray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    }, btn: {
        height: Height(150),
        width: Width(360),
        backgroundColor: colors.primaryWhite,
        alignSelf: 'center',
        borderRadius: Width(5),
        marginTop: Height(30),
        justifyContent: 'space-between',
        paddingHorizontal: Width(10)
    }, text: {
        width: Width(255),
        fontSize: Height(15),
        color: colors.gray
    }, rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Height(20)
    }, bottomText: {
        textAlign: 'right',
        fontSize: Height(10),
        color: colors.gray
    }
})