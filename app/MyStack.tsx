import {Stack} from "expo-router";
import CustomHeader from "@/router/CustomHeader";
import {EDIT_MEDIA_POST} from "@/router/routes";
import React from "react";
import Animated, {interpolate, useAnimatedStyle} from "react-native-reanimated";
import {useDrawerProgress} from "react-native-drawer-layout";

const MyStack = () => {
    const progress: any = useDrawerProgress();
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: "100%",
            width: "100%",
            transform: [
                {
                    translateX: interpolate(progress, [0, 1], [-100, 0]),
                },
            ],
        };
    });
    return <Animated.View style={animatedStyle}>
        <Stack
            screenOptions={{
                header: () => <CustomHeader/>,
            }}
        >
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name={EDIT_MEDIA_POST} options={{headerShown: false}}/>
            <Stack.Screen name={'/mi/edit/mediapoint/[mediaPostGUID]'} options={{headerShown: false}}/>

            {/*<Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />*/}
            {/*<Stack.Screen name="(home)" options={{ headerShown: false }} />*/}
            <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
        </Stack>
    </Animated.View>

}

export default MyStack;