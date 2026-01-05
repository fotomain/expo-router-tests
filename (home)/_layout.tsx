import {View,Text} from "react-native";
import {Stack} from "expo-router";

export default function HometLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="two" options={{ headerShown: false }} />
        </Stack>
    )
}