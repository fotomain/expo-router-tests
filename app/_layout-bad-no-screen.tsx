// app/(drawer)/_layout.tsx
// import {Drawer} from 'expo-router/drawer';
// import {DrawerToggleButton} from '@react-navigation/drawer';

import React, {useState} from "react";

// import {Button} from '@react-navigation/elements';
import {Drawer} from 'react-native-drawer-layout';
import {StatusBar, Text} from "react-native";
import {Stack, useNavigation} from "expo-router";
import MyStack from "@/app/MyStack";

//DOC https://reactnavigation.org/docs/8.x/drawer-layout/

export default function Layout() {
    const navigation: any = useNavigation();

    const [open, setOpen] = useState<boolean>(true)


    return (
        <Stack>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <Drawer
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderDrawerContent={() => {
                    return <Text>Drawer content</Text>;
                }}
            >

                {/*<Button*/}
                {/*    onPress={() => setOpen((prevOpen) => !prevOpen)}*/}
                {/*    title={`${open ? 'Close' : 'Open'} drawer`}*/}
                {/*/>*/}

                <MyStack open={open} setOpen={setOpen}/>

            </Drawer>
        </Stack>
    )

    // return (
    //     <Drawer
    //
    //         // open={open as boolean}
    //         drawerContent={(props) => <CustomDrawerContent {...props} />}
    //         screenOptions={{
    //             headerShown: true,
    //             // 1. Custom App Bar Styling
    //             headerStyle: {backgroundColor: '#6200ee'},
    //             headerTintColor: '#fff',
    //
    //             // 2. Custom Drawer Icon (replaces default hamburger)
    //             headerLeft: () => {
    //                 // return <Pressable onPress={() => {
    //                 //     navigation.dispatch(DrawerActions.openDrawer());
    //                 // }}>
    //                 //     <Text style={{color: "#fff"}}>XXXX</Text>
    //                 // </Pressable>
    //                 return (
    //                     <DrawerToggleButton
    //                         tintColor="#fff"
    //
    //                         // Or use a completely custom icon:
    //                         // children={<Ionicons name="menu-outline" size={28} color="white" />}
    //                     />
    //                 )
    //             },
    //         }}
    //     >
    //         <Drawer.Screen name="index" options={{title: 'Home'}}/>
    //     </Drawer>
    //
    // );
}
