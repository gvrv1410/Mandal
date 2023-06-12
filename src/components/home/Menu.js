import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Menu = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={style.mainContainer}>
                <Image
                    source={icon}
                    style={style.imageStyle}
                    resizeMode="contain"
                />
                <Text style={style.titleStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 5,
        alignItems: 'center'
    },
    imageStyle: {
        height: 60,
        width: 60
    },
    titleStyle: {
        fontSize: 12,
        fontWeight: "500",
        marginTop: 10
    }
})


export default Menu