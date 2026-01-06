import {Stack} from "expo-router";
import {EDIT_MEDIA_POST} from "@/router/routes";

import {interpolate, useAnimatedStyle} from "react-native-reanimated";
import {useDrawerProgress} from "react-native-drawer-layout";
import {StyleSheet} from "react-native";
import CustomHeader from "@/router/CustomHeader";

const MyStack = (props: any) => {
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
    return <Stack
        screenOptions={{
            header: () => <CustomHeader {...props}/>,
        }}
    >
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name={EDIT_MEDIA_POST}
                      options={{
                          headerShown: false,

                      }}/>
        <Stack.Screen name={'/mi/edit/mediapoint/[mediaPostGUID]'} options={{headerShown: false}}/>

        {/*<Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />*/}
        {/*<Stack.Screen name="(home)" options={{ headerShown: false }} />*/}
        <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
    </Stack>


}

export default MyStack;


const styles = StyleSheet.create({
    headerButton: {
        marginRight: 15,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 4,
    },
    headerButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
});