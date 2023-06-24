import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils";
import MarqueeView from 'react-native-marquee-view';
import { width } from "../../helper/constant";


const HeadLine = ({ headline }) => {
    return (
        <MarqueeView
            style={style.marqueeViewStyle}>
            <Text style={style.headLineTextStyle}>{headline?.headline}</Text>
        </MarqueeView>
    )
}

const style = StyleSheet.create({
    marqueeViewStyle: {
        backgroundColor: colors.liteGray,
        width: width,
        paddingVertical: 2,
        alignItems: 'center',
    },
    headLineTextStyle: {
        color: colors.primary,
        fontSize: 12,
        width: width,
    }
})


export default HeadLine