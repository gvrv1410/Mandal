import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils";
import MarqueeView from 'react-native-marquee-view';

const HeadLine = () => {
    return (
        <MarqueeView
            style={style.marqueeViewStyle}>
            <Text style={style.headLineTextStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        </MarqueeView>
    )
}

const style = StyleSheet.create({
    marqueeViewStyle: {
        backgroundColor: colors.liteGray,
        width: 400,
        paddingVertical: 2
    },
    headLineTextStyle: {
        color: colors.primary,
        fontSize: 12
    }
})


export default HeadLine