import {LogBox, StyleSheet} from 'react-native';
import {Drawer} from 'expo-router/drawer';
import {Stack, useNavigation, useRouter, useSegments} from "expo-router";
import React, {useEffect, useState} from "react";
import WithDrawers from "@/app/WithDrawers";
import {READ_MEDIA_POSTS} from "@/router1/routes";


export default function Layout() {
    const router = useRouter();
    const segments: any = useSegments();
    const navigation = useNavigation();
    const [open, setOpen] = useState<boolean>(false)


    useEffect(() => {
        // Suppress warnings
        LogBox.ignoreLogs([
            '/props.pointerEvents is deprecated. Use style.pointerEvents/',
            // Add other warnings
        ]);
    }, []);
    // return (<View><Text>0000</Text></View>)

    return (

        <WithDrawers Drawer={Drawer}>
            <Drawer.Screen name="index" options={{title: 'Home'}}/>
            {/*<Drawer.Screen name={READ_MEDIA_POSTS} options={{title: 'Posts Flow'}}/>*/}
            <Drawer.Protected guard={true}>
                <Drawer.Screen name={READ_MEDIA_POSTS} options={{title: 'Posts Flow'}}/>
            </Drawer.Protected>
            <Stack.Screen
                name="modal"
                options={{
                    headerShown: false,
                    // presentation: 'transparentModal',
                    presentation: 'modal',
                    // animation: 'fade_from_bottom',
                    animationDuration: 1000
                }}
            />
        </WithDrawers>

    );
}

const styles = StyleSheet.create({
    rotatedButton: {
        transform: [{rotate: '90deg'}],
        marginRight: 16,
    },

});

//
// <View><Text>0000</Text></View>
// <View><Text>0000</Text></View>