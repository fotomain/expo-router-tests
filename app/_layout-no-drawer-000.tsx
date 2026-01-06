import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/components/useColorScheme';

import {GestureHandlerRootView} from "react-native-gesture-handler";
import {CREATE_MEDIA_POST, UPLOAD_TO_GOOGLEDRIVE} from "@/router/routes";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerItems from "@/app/DrawerItems";
import RootNavigator from "@/app/RootNavigator";

const Drawer = createDrawerNavigator<{ Home: undefined }>()

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    const VIEW_MEDIA_POSTS1 = 'mi/view/mediaposts'
    const hiddenRoutes: any = ['modal', '_layout_tabs', 'mi/home', VIEW_MEDIA_POSTS1, CREATE_MEDIA_POST, UPLOAD_TO_GOOGLEDRIVE,]

    console.log("=== hiddenRoutes ", hiddenRoutes);

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer.Navigator
                screenOptions={{
                    // drawerStyle: collapsed && {
                    //     width: collapsedDrawerWidth,
                    // },
                }}
                drawerContent={() => <DrawerItems/>}
            >
                <Drawer.Screen
                    name="Home"
                    component={RootNavigator}
                    options={{headerShown: false}}
                />
            </Drawer.Navigator>

            {/*<Drawer>*/}
            {/*    <Drawer.Screen*/}
            {/*        name="index" // This is the name of the page and must match the url from root*/}
            {/*        options={{*/}
            {/*            drawerLabel: 'Home',*/}
            {/*            title: 'Home',*/}
            {/*            drawerIcon: ({color, size}) => (*/}
            {/*                <Ionicons name='home' color={color} size={size}/>*/}
            {/*            ),*/}
            {/*        }}*/}
            {/*    />*/}

            {/*    {hiddenRoutes.map((name: any) => (*/}
            {/*        <Drawer.Screen*/}
            {/*            name={name}*/}
            {/*            options={{drawerItemStyle: {display: 'none'}}}*/}
            {/*        />*/}
            {/*    ))}*/}

            {/*</Drawer>*/}
        </GestureHandlerRootView>
    );

}
