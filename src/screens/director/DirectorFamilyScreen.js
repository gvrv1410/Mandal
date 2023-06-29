import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '../../components'
import { colors } from '../../utils'
import iconConstant from '../../helper/iconConstant'
import { Height, Width } from '../../utils/responsive'
import DropShadow from 'react-native-drop-shadow'
import DirectorCardView from '../../components/director/DirectorCardView'
import { directorFamilyData } from '../../helper/dummyData'

const DirectorFamilyScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    return (
        <View style={style.mainContainer}>
            <Header
                title={route.params?.data.title}
                isBack={true}
            />
            <DropShadow style={style.shadow}>
                <View style={style.rowContaier}>
                    <TextInput
                        placeholder='શોધો'
                        style={style.textInput}
                    />
                    <Image source={iconConstant.ic_search} style={style.icon} />
                </View>
            </DropShadow>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={directorFamilyData}
                    renderItem={({ item }) => {
                        return (
                            <DirectorCardView
                                profile={iconConstant.ic_profile}
                                name={item.name}
                                familyCode={item.familyCode}
                                wpNumber={item.wpNumber}
                                onImagePress={() => navigation.navigate('DirectorProfile', { data: item })}
                                onPress={() => navigation.navigate('DirectorMember', { data: item })}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default DirectorFamilyScreen

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    },
    icon: {
        width: Width(20),
        height: Height(20),
        resizeMode: 'contain'
    },
    rowContaier: {
        height: Height(50),
        width: Width(360),
        backgroundColor: colors.primaryWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Width(20),
        alignSelf: 'center',
        borderRadius: Width(5),
        marginTop: Height(20)
    }, shadow: {
        shadowColor: colors.gray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    textInput: {
        width: Width(280)
    }
})