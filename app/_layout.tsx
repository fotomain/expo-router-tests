import {StyleSheet} from 'react-native';
import {Drawer} from 'expo-router/drawer';
import {useNavigation, useRouter, useSegments} from "expo-router";
import React, {useState} from "react";
import WithDrawers from "@/app/WithDrawers";

export default function Layout() {
    const router = useRouter();
    const segments: any = useSegments();
    const navigation = useNavigation();
    const [open, setOpen] = useState<boolean>(false)


    // return (<View><Text>0000</Text></View>)

    return (

        <WithDrawers Drawer={Drawer}>
            {/*<Stack/>*/}
            <Drawer.Screen name="index" options={{title: 'Home'}}/>
            {/*<Drawer.Screen name={READ_MEDIA_POSTS} options={{title: 'Posts Flow'}}/>*/}
            {/*<Drawer.Protected guard={true}>*/}
            {/*    <Drawer.Screen name={READ_MEDIA_POSTS} options={{title: 'Posts Flow'}}/>*/}
            {/*</Drawer.Protected>*/}
            {/*<Stack.Screen*/}
            {/*    name="modal"*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        // presentation: 'transparentModal',*/}
            {/*        presentation: 'modal',*/}
            {/*        // animation: 'fade_from_bottom',*/}
            {/*        animationDuration: 1000*/}
            {/*    }}*/}
            {/*/>*/}
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