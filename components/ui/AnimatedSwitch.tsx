import {View, TouchableOpacity, Text} from 'react-native';
import React from "react";
import {Image} from "expo-image";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import "../../global.css"
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { ZoomIn, ZoomOut } from 'react-native-reanimated';

import { SlideInLeft, SlideOutRight } from 'react-native-reanimated';
const AnimatedSwitch = () => {
    const animation = useSharedValue(-2);
    const [isDay,setIsDay] = React.useState(true);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: animation.value}]
        }
    })

    function userType(){
        if (isDay){
            return "User"
        }else{
            return "Official"
        }
    }


    return (
        <View className="m-auto w-1/2 mb-5 mt-5">
            <TouchableOpacity style={
                {
                    width: 150,
                    height: 20,
                    borderRadius: 30,
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin : 'auto'

                }
            } onPress={() => {
                if (animation.value <= 10) {
                    animation.value = withTiming(120, {duration: 500})
                    setIsDay(false);
                } else {
                    animation.value = withTiming(-2, {duration: 500})
                    setIsDay(true);
                }
            }
            }>
                <Animated.View style={[{width: 30, height: 30}, animatedStyle]}>
                    <Image
                        source={isDay? require('../../assets/icons/abcd.png') : require('../../assets/icons/abcde.png')}
                        style={{width: '100%', height: '100%'}}/>

                </Animated.View>


            </TouchableOpacity>
            <Animated.Text
                key={isDay ? 'user' : 'official'}
                entering={ZoomIn.duration(300)}
                exiting={ZoomOut.duration(300)}
                className="text-4xl w-full flex justify-center mt-5 text-center font-bold"
            >
                Login as {userType()}
            </Animated.Text>


        </View>


    )

}


export default AnimatedSwitch;