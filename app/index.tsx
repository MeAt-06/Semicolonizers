import {Animated, KeyboardAvoidingView, Text, View} from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import React from 'react';
import AnimatedSwitch from "../components/ui/AnimatedSwitch";
import Input from "../components/ui/input";
import ScrollView = Animated.ScrollView;
import {components} from "@eva-design/eva/mapping";
import width = components.Avatar.meta.parameters.width;

export default function Index() {
    return (

        <ScrollView automaticallyAdjustKeyboardInsets={true} className = "bg-white-100">
        <SafeAreaView className="bg-white-100 items-center w-full h-full">
            <View>
                <View className= "m-auto" style= {{width : 150, height : 150}}>
                <Image className="flex justify-center" style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain'
                    }}
                       source={require('../assets/images/jharkhand_govt_logo.png')}/>
                </View>

                <AnimatedSwitch/>
            </View>


            <View className="flex justify-center mt-2 w-full">

                {/* Slider GOES HERE*/}

            </View>
            <View className="flex justify-center mt-2 w-1/2 mt-5">
                <ScrollView automaticallyAdjustKeyboardInsets={true}>

                    <Input
                        label={"Phone Number"} placeholder={"Phone Number"}
                    />
                    <Input label={"Password"} placeholder={"Password"}
                    />
                </ScrollView>

            </View>


        </SafeAreaView>
        </ScrollView>

    );
}
