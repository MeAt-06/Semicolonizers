import { Text, View } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import { Slider } from "@/components/ui/slider"

export default function Index() {
  return(
    <SafeAreaView className="bg-white-100 items-center w-full h-full">
        <View>
            <Image className=""></Image>
            <Text className="text-4xl w-full flex justify-center mt-10">Login as</Text>
        {/* Slider GOES HERE*/}
            <Slider defaultValue={[1]} max={2} step={1} />
        </View>
        <View>
            <Text>You are logging as a {}</Text>
        </View>


    </SafeAreaView>
  );
}
