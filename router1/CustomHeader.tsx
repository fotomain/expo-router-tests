import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRouter, useSegments} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import React from "react";
import {routerGlobals} from "@/router1/routerGlobals";

const CustomHeader = (props: any) => {
    const navigation = useNavigation();
    const route: any = useRouter();

    let prevRoute = ""
    let prevRoute2 = ""
    const segments = useSegments();
    const currentRoute: any = segments[segments.length - 1];

    if (segments.length > 1) {
        prevRoute = segments[segments.length - 2];
    }
    if (segments.length > 2) {
        prevRoute2 = segments[segments.length - 3];
    }

    console.log("=== route prevRoute2", prevRoute2)

    const is = (p: string) => {
        const ret = segments.find((el) => el === p)
        if (ret !== undefined) return true
        return false
    }

    console.log("=== segments find - ", is("read"))
    console.log("=== route prevRoute", prevRoute)
    console.log("=== route currentRoute1", currentRoute)

    // Map route names to display titles
    const getTitle = () => {
        switch (true) {
            case 'webpage' === currentRoute:
                return 'Web Page';
            case 'googledrive' === currentRoute:
                return 'Files';
            case '(tabs)' === currentRoute:
                return 'Tabs Example';
            case 'googledrive' === currentRoute:
                return 'Files';
            case ('mediapost' === currentRoute && 'create' === prevRoute):
                return 'New Media Post';
            case ('[guid]' === currentRoute && 'mediapost' === prevRoute && 'update' === prevRoute2):
                return 'Edit Media Post';
            case is("read") && is("mediapost"):
                return 'Video'; // 1st Tab = mediaposts = YouTube
            default:
                return currentRoute + '-app7';
        }
    };

    // Show back button only if we can go back
    const canGoBack = navigation.canGoBack();

    return (
        <>
            <View style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#e5e5e5',
                // backgroundColor: 'blue',
                // backgroundColor: '#fff',
            }}>
                <View style={{flexDirection: 'row', flex: 1}}>

                    {!canGoBack ? (<Button
                        onPress={() => props.setOpen((prevOpen: any) => !prevOpen)}
                        title={`${props.open ? 'Close' : 'Open'} drawer`}
                    />) : (<></>)}

                    {canGoBack ? (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{marginRight: 16}}
                        >
                            <Ionicons name="arrow-back" size={24} color={routerGlobals.navigateTabsIconColor}/>
                        </TouchableOpacity>
                    ) : (
                        <View style={{marginRight: 16}}>
                            <Ionicons name="logo-react" size={24} color="#007AFF"/>
                        </View>
                        // <Button
                        //     onPress={() => props.setOpen((prevOpen: any) => !prevOpen)}
                        //     title={`${props.open ? 'Close' : 'Open'} drawer`}
                        // />
                    )
                    }

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000',
                    }}>
                        {getTitle()}
                    </Text>
                </View>

            </View>
        </>
    );
};

export default CustomHeader;