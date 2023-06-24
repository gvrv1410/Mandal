import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Header } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHeadlines } from '../../actions/headlinesActions'
import imageConstant from '../../helper/imageConstant'
import { colors } from '../../utils'
import { Height, Width } from '../../utils/responsive'
import { profileData } from '../../helper/dummyData'

const UserProfileScreen = () => {
    const dispatch = useDispatch()
    const { headlineData } = useSelector(state => state.fetchHeadlines)
    useEffect(() => {
        dispatch(fetchHeadlines())
    }, [])


    const renderItem = ({ item }) => {
        return (
            <View style={style.mainView}>
                <Text>{item.name}</Text>
                <Text>{item.subName}</Text>
            </View>
        )
    }

    return (
        <View>
            <Header
                title={"પ્રોફાઇલ"}
                isBack={true}
                headline={headlineData?.[0]}
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
            <Button
                title={'ફેરફાર કરો'}
                buttonStyle={{ backgroundColor: colors.primary }}
            />
        </View>
    )
}

export default UserProfileScreen

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
    }
})