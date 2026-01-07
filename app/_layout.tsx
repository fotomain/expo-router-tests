import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import CustomDrawerContent from "@/app/CustomDrawerContent";
import {useNavigation, useRouter, useSegments} from "expo-router";
import {TouchableOpacity, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Drawer as Drawer2} from "react-native-drawer-layout";
import {Drawer as DrawerPaper} from "react-native-paper";
import {VIEW_MEDIA_POSTS} from "@/router/routes";

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
                    return (
                        <View>
                            <DrawerPaper.Item
                                // icon="clipboard-flow-outline"
                                icon={(p: any) => (
                                    <MaterialCommunityIcons name="home" {...p} size={26}/>
                                )}
                                label="Home"
                                onPress={() => {
                                    console.log("Pressed1")
                                    // @ts-ignore
                                    router.push('/')
                                }}
                            />

                            <DrawerPaper.Item
                                // icon="clipboard-flow-outline"
                                icon={(p: any) => (
                                    <MaterialCommunityIcons name="clipboard-flow-outline" {...p} size={26}/>
                                )}
                                label="Flow"
                                onPress={() => {
                                    console.log("Pressed1")
                                    // @ts-ignore
                                    navigation.navigate("Card2")
                                }}
                            />

                            <DrawerPaper.Item
                                // icon="clipboard-flow-outline"
                                icon={(p: any) => (
                                    <MaterialCommunityIcons name="email" {...p} size={26}/>
                                )}
                                label="Posts"
                                onPress={() => {
                                    console.log("Pressed1")
                                    // @ts-ignore
                                    router.push(VIEW_MEDIA_POSTS)
                                    setOpen(false)
                                }}
                            />


                        </View>)
                }}
                drawerPosition="right"
            >

                <Drawer
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
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

                        // 2. Custom Drawer Icon (replaces default hamburger)
                        headerRight: (p: any) => {

                            return (<TouchableOpacity
                                onPress={() => {
                                    setOpen((prevOpen) => !prevOpen)
                                    // Alert.alert("headerRight", "!!!")
                                    // window.alert("headerRight")
                                    // router.back()
                                }}
                                style={{paddingLeft: 16, paddingRight: 16,}}
                            >
                                <MaterialCommunityIcons name="dots-vertical" size={24} color="red"/>
                            </TouchableOpacity>)

                        },
                        headerLeft: (p: any) => {
                            console.log("p1 router.canGoBack", router.canGoBack())
                            console.log("p1 segments ", segments)
                            console.log("p1 segments.length ", segments.length)
                            console.log("p1 router", router)
                            if (router.canGoBack()) {
                                return (<TouchableOpacity
                                    onPress={() => router.back()}
                                    style={{paddingLeft: 16, paddingRight: 16,}}
                                >
                                    <Ionicons name="arrow-back" size={24} color="red"/>

                                </TouchableOpacity>)
                            }
                            return (
                                <DrawerToggleButton
                                    tintColor="#fff"
                                    // Or use a completely custom icon:
                                    // children={<Ionicons name="menu-outline" size={28} color="white" />}
                                />
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