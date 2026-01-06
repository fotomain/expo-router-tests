import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useRouter} from 'expo-router';
import {Text, View} from 'react-native';
import {VIEW_MEDIA_POSTS} from "@/router/routes";

export default function CustomDrawerContent(props: any) {
    const router = useRouter();
    return (
        <DrawerContentScrollView {...props}>
            <View style={{padding: 20, backgroundColor: '#f4f4f4'}}>
                <Text style={{fontWeight: 'bold'}}>User Profile</Text>
            </View>
            <DrawerItem label="Home" onPress={() => router.push('/')}/>
            <DrawerItem label="Posts" onPress={() => router.push(VIEW_MEDIA_POSTS)}/>
            {/* Custom Item */}
            <DrawerItem label="Help Center" onPress={() => { /* custom logic */
            }}/>
        </DrawerContentScrollView>
    );
}