import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import DrawerLeftScreen from "@/app/DrawerLeftScreen";
import {useNavigation, useRouter, useSegments} from "expo-router";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Drawer as Drawer2} from "react-native-drawer-layout";
import DrawerRightScreen from "@/app/DrawerRightScreen";

let uxuiState: any = {}
uxuiState.drawerRight = {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40
}

uxuiState.drawerLeft = {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40
}

export default function Layout() {
    const router = useRouter();
    const segments: any = useSegments();
    const navigation = useNavigation();
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Drawer2
                drawerStyle={{
                    borderTopLeftRadius: uxuiState.drawerRight.borderTopLeftRadius,
                    borderBottomLeftRadius: uxuiState.drawerRight.borderBottomLeftRadius,
                    overflow: 'hidden', // Important for borderRadius to work with gradient
                }}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderDrawerContent={() => {
                    return (<DrawerRightScreen setOpen={setOpen}/>)
                }}
                drawerPosition="right"
            >

                <Drawer
                    drawerContent={(props) => <DrawerLeftScreen {...props} />}
                    screenOptions={{
                        drawerStyle: {
                            backgroundColor: 'pink',
                            borderTopRightRadius: uxuiState.drawerLeft.borderTopRightRadius,
                            borderBottomRightRadius: uxuiState.drawerLeft.borderBottomRightRadius,
                            // OR use a single property for all corners:
                            // borderRadius: 30,
                        },
                        drawerPosition: 'left',
                        headerShown: true,
                        // 1. Custom App Bar Styling
                        headerStyle: {backgroundColor: '#6200ee'},
                        headerTintColor: '#fff',

                        headerLeft: (p: any) => {
                            // console.log("p1 router.canGoBack", router.canGoBack())
                            // console.log("p1 segments ", segments)
                            // console.log("p1 segments.length ", segments.length)
                            // console.log("p1 router", router)
                            if (router.canGoBack()) {
                                return (<TouchableOpacity
                                    onPress={() => router.back()}
                                    style={{paddingLeft: 16, paddingRight: 16,}}
                                >
                                    <Ionicons name="arrow-back" size={24} color="red"/>

                                </TouchableOpacity>)
                            }

                            // return <MaterialCommunityIcons name="menu" size={24} style={{marginLeft: 16}}/>

                            return (
                                <View style={(!router.canGoBack()) ? {} : styles.rotatedButton}>
                                    <DrawerToggleButton
                                        tintColor="#fff"
                                        // Or use a completely custom icon:
                                        // children={<Ionicons name="menu-outline" size={28} color="white" />}
                                    />
                                </View>
                            )
                        },
                        headerRight: (p: any) => {

                            return (
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{marginLeft: 20}}>
                                        <Ionicons name="search-outline" size={24} color="white"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: 20}}>
                                        <Ionicons name="notifications-outline" size={24} color="white"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpen((prevOpen) => !prevOpen)
                                            // Alert.alert("headerRight", "!!!")
                                            // window.alert("headerRight")
                                            // router.back()
                                        }}
                                        style={{paddingLeft: 16, paddingRight: 16,}}
                                    >
                                        <MaterialCommunityIcons name="dots-vertical" size={24} color="white"/>
                                    </TouchableOpacity>
                                </View>
                            )

                        },
                    }}
                >
                    <Drawer.Screen name="index" options={{title: 'Home'}}/>
                </Drawer>
            </Drawer2>
        </>
    );
}

const styles = StyleSheet.create({
    rotatedButton: {
        transform: [{rotate: '90deg'}],
        marginRight: 16,
    },

});