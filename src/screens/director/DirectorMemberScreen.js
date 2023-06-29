import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { useNavigation, useRoute } from '@react-navigation/native'
import DirectorCardView from '../../components/director/DirectorCardView'
import { directorFamilyData } from '../../helper/dummyData'
import iconConstant from '../../helper/iconConstant'
import { colors } from '../../utils'

const DirectorMemberScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    return (
        <View style={style.mainContainer}>
            <Header
                title={route.params?.data.name}
                isBack={true}
            />
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
                                onImagePress={() => navigation.navigate('MemberProfile', { data: item })}
                                onPress={() => navigation.navigate('DirectorDetail', { data: item })}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default DirectorMemberScreen

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryWhite
    }
})