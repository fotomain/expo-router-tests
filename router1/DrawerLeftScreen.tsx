import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useRouter} from 'expo-router';
import {LogBox, Text, View} from 'react-native';
import {routerGlobals} from "@/router1/routerGlobals";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Menu} from "react-native-paper";
import {READ_MEDIA_POSTS} from "@/router1/routes";

// LogBox.ignoreLogs(['props.pointerEvent']);
LogBox.ignoreAllLogs();

export default function DrawerLeftScreen
(props: any) {
    const router = useRouter();
    // pointerEvents={'none'}
    return (
        <DrawerContentScrollView
            style={{backgroundColor: "pink"}}
            contentContainerStyle={{padding: routerGlobals.drawerLeft.paddingAll}}
        >
            <View style={{padding: 20, backgroundColor: '#f4f4f4'}}>
                <Text style={{fontWeight: 'bold'}}>User Profile</Text>
            </View>

            {/* TODO DrawerPaper*/}
            <Menu.Item
                // icon="clipboard-flow-outline"
                leadingIcon={(p: any) => (
                    <MaterialCommunityIcons name="clipboard-flow-outline" {...p} size={26}/>
                )}
                title="Flow"
                onPress={() => {
                    console.log("Pressed1")
                    // @ts-ignore
                    router.push(READ_MEDIA_POSTS)
                }}
            />

            <Menu.Item
                // icon="clipboard-flow-outline"
                leadingIcon={(p: any) => (
                    <MaterialCommunityIcons name="email" {...p} size={26}/>
                )}
                title="Posts"
                onPress={() => {
                    console.log("Pressed1")
                    // @ts-ignore
                    router.push(READ_MEDIA_POSTS)
                }}
            />


        </DrawerContentScrollView>
    );
}