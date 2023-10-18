import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import tw from 'twrnc';

export const GradientBtn = ({ name, colors, style }) => (
    <LinearGradient colors={colors} style={style}>
        <Text style={tw`uppercase text-white text-center pt-3.5 text-3xl font-semibold`}>
            {name}
        </Text>
    </LinearGradient>
);

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
    },
});
