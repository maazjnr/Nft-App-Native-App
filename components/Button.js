import { View, Text, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, HandlePress, ...props}) => {
  return (
    <TouchableOpacity style={
        {width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props
        }} onPress={HandlePress}>
            <Image
            source={imgUrl}
            resizeMode="contain"
            style={{width: 24, height: 24}}
            />
        
    </TouchableOpacity>
  )
}

export const RectButton = () => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }
  
