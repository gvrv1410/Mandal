import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { useRoute } from '@react-navigation/native'
import SubCardView from '../../components/common/SubCardView'
import { marriageData } from '../../helper/dummyData'
import { colors } from '../../utils'

const BloodDetailScreen = () => {
    const route = useRoute()
    console.log({ route });
    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryWhite }}>
            <Header title={route.params?.data.group} isBack={true} />
            <View style={{ flex: 1, marginVertical: 16 }}>

                <FlatList
                    data={marriageData}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <SubCardView
                                    name={item.name}
                                    village={item.village}
                                    city={item.city}
                                    dob={item.dob}
                                    address={item.address}
                                    isGroup={true}
                                    isMob={true}
                                    mob={'૯૫૧૨૩૪૫૬૭૮'}
                                    group={'o-'}
                                //   isDob={true}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

        </View>
    )
}

export default BloodDetailScreen

const styles = StyleSheet.create({})