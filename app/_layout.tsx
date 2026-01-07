import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import CustomDrawerContent from "@/app/CustomDrawerContent";
import {useNavigation, useRouter, useSegments} from "expo-router";
import {Text, TouchableOpacity} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Drawer as Drawer2} from "react-native-drawer-layout";

export default function Layout() {
    const router = useRouter();
    const segments: any = useSegments();
    const navigation = useNavigation();
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <Drawer2
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderDrawerContent={() => {
                    return <Text>Drawer menu</Text>;
                }}
                drawerPosition="right"
            >

                <Drawer
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    screenOptions={{
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