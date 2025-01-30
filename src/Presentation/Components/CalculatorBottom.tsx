import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme';


interface Props {
    label: string,
    color?: string,
    doblesize?: boolean,
    blackText?: boolean,
    onPress: () => void
}

export const CalculatorBottom = ({
    label,
    color = colors.darkGray,
    doblesize = false,
    blackText = false,
    onPress
}: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({pressed}) => ({
                ...styles.buttom,
                backgroundColor: color,
                width: (doblesize) ? 180 : 80,
                opacity: (pressed) ? 0.8 : 1
            })} >
            <Text style={{
                ...styles.buttomText,
                color: (blackText) ? 'black' : 'white'
            }} >{label}</Text>
        </Pressable>
    )
}
