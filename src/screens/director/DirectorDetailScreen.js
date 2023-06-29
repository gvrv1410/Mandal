import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { useRoute } from '@react-navigation/native'
import { profileData } from '../../helper/dummyData'
import imageConstant from '../../helper/imageConstant'
import { Height, Width } from '../../utils/responsive'
import { colors } from '../../utils'

const DirectorDetailScreen = () => {
    const route = useRoute()
    const renderItem = ({ item }) => {
        return (
            <View style={style.mainView}>
                <Text>{item.name}</Text>
                <Text>{item.subName}</Text>
            </View>
        )
    }
    return (
        <View style={style.mainContainer}>
            <Header
                title={route.params?.data.familyCode}
                isBack={true}
            />
            <Image
                source={imageConstant.profile}
                style={style.imageStyle}
                resizeMode="contain"
            />
            <Text style={style.text}>ગોયાણી અવી દીલીપભાઈ</Text>

            <FlatList
                data={profileData}
                renderItem={renderItem}
                style={style.flatlist}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </View>
    )
}

export default DirectorDetailScreen

const style = StyleSheet.create({
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        marginTop: 10
    }, mainView: {
        flexDirection: 'row',
        marginTop: Height(30)
    }, flatlist: {
        height: Height(780),
        backgroundColor: colors.primaryWhite,
        marginHorizontal: Width(20)
    }, mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    }
})