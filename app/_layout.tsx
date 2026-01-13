import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import DrawerLeftScreen from "@/app/DrawerLeftScreen";
import {useNavigation, useRouter, useSegments} from "expo-router";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Drawer as Drawer2} from "react-native-drawer-layout";
import DrawerRightScreen from "@/app/DrawerRightScreen";
import {routerGlobals} from "@/router1/routerGlobals";

export default function Layout() {
    const router = useRouter();
    const segments: any = useSegments();
    const navigation = useNavigation();
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Drawer2
                drawerStyle={{
                    borderTopLeftRadius: routerGlobals.drawerRight.borderTopLeftRadius,
                    borderBottomLeftRadius: routerGlobals.drawerRight.borderBottomLeftRadius,
                    overflow: 'hidden', // Important for borderRadius to work with gradient
                }}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderDrawerContent={() => {
                    return (<DrawerRightScreen setOpen={setOpen}/>)
                }}
                drawerPosition={routerGlobals.drawerRight.position}
            >
                <Drawer
                    drawerContent={(props) => <DrawerLeftScreen {...props} />}
                    screenOptions={{
                        drawerStyle: {
                            backgroundColor: 'pink',
                            borderTopRightRadius: routerGlobals.drawerLeft.borderTopRightRadius,
                            borderBottomRightRadius: routerGlobals.drawerLeft.borderBottomRightRadius,
                            // OR use a single property for all corners:
                            // borderRadius: 30,
                        },
                        drawerPosition: routerGlobals.drawerLeft.position,
                        headerShown: true,
                        // 1. Custom App Bar Styling
                        headerStyle: {backgroundColor: '#6200ee'},
                        headerTintColor: '#fff',


                        headerLeft: (p: any) => {
                            // console.log("p1 router1.canGoBack", router1.canGoBack())
                            // console.log("p1 segments ", segments)
                            // console.log("p1 segments.length ", segments.length)
                            // console.log("p1 router1", router1)
                            if (router.canGoBack()) {
                                return (<TouchableOpacity
                                    onPress={() => router.back()}
                                    style={{paddingLeft: 16, paddingRight: 16,}}
                                >
                                    <Ionicons name="arrow-back" size={24} color={routerGlobals.navigateMainIconColor}/>

                                </TouchableOpacity>)
                            }

                            // return <MaterialCommunityIcons name="menu" size={24} style={{marginLeft: 16}}/>

                            return (
                                <View style={(!router.canGoBack()) ? {} : styles.rotatedButton}>
                                    <DrawerToggleButton
                                        tintColor={routerGlobals.hamburgerColor}
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
                                        <Ionicons name="search-outline" size={24}
                                                  color={routerGlobals.navigateIconsColor}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft: 20}}>
                                        <Ionicons name="notifications-outline" size={24}
                                                  color={routerGlobals.navigateIconsColor}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpen((prevOpen) => !prevOpen)
                                            // Alert.alert("headerRight", "!!!")
                                            // window.alert("headerRight")
                                            // router1.back()
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
                    <Drawer.Protected guard={true}>
                        <Drawer.Screen name="mi/mediapost/read" options={{title: 'Posts Flow'}}/>
                    </Drawer.Protected>
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