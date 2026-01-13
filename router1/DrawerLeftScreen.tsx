import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useRouter} from 'expo-router';
import {Text, View} from 'react-native';
import {READ_MEDIA_POSTS} from "@/router1/routes";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {Drawer as DrawerPaper,} from "react-native-paper"

export default function DrawerLeftScreen
(props: any) {
    const router = useRouter();
    return (
        <DrawerContentScrollView {...props}>
            <View style={{padding: 20, backgroundColor: '#f4f4f4'}}>
                <Text style={{fontWeight: 'bold'}}>User Profile</Text>
            </View>

            <DrawerPaper.Item
                // icon="clipboard-flow-outline"
                icon={(p: any) => (
                    <MaterialCommunityIcons name="clipboard-flow-outline" {...p} size={26}/>
                )}
                label="Flow"
                onPress={() => {
                    console.log("Pressed1")
                    // @ts-ignore
                    router.push(READ_MEDIA_POSTS)
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
                    router.push(READ_MEDIA_POSTS)
                }}
            />


            {/* Custom Item */}
            <DrawerItem label="Help Center" onPress={() => { /* custom logic */
            }}/>
        </DrawerContentScrollView>
    );
}