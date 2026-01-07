import {Drawer} from 'expo-router/drawer';
import {Pressable} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from 'expo-router';

export default function RightDrawerLayout() {
    const navigation: any = useNavigation();
    console.log("=== Right DrawerLayout");


    return (
        <Drawer
            screenOptions={{
                drawerPosition: 'right',
                headerShown: true, // This becomes your primary app bar
                // LEFT ICON: Hamburger for the Left Drawer
                headerLeft: () => (
                    <Pressable onPress={() => navigation.getParent()?.openDrawer()}>
                        <MaterialCommunityIcons name="menu" size={24} style={{marginLeft: 16}}/>
                    </Pressable>
                ),
                // RIGHT ICON: Three Dots for the Right Drawer
                headerRight: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <MaterialCommunityIcons name="dots-vertical" size={24} style={{marginRight: 16}}/>
                    </Pressable>
                ),
            }}
        >
            <Drawer.Screen name="index-ok" options={{title: 'My App'}}/>
        </Drawer>
    );
}
