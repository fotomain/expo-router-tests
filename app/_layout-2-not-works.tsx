import {Drawer} from 'expo-router/drawer';
import {useNavigation} from "expo-router";
import {Pressable, StyleSheet, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function RootLayout() {
    console.log("=== Left DrawerLayout");
    const navigation: any = useNavigation();
    return (
        <Drawer
            screenOptions={{
                drawerPosition: 'left',
                headerShown: false,
                headerLeft: () => (
                    <></>
                ),

            }}
        >
            <View style={{flex: 1, height: "100%", backgroundColor: "pink"}}>
                <Drawer
                    // drawerContent={(props) => <CustomDrawerContent {...props} />}
                    screenOptions={{
                        drawerPosition: 'right',
                        headerShown: true, // This becomes your primary app bar
                        // headerStyle: {backgroundColor: '#6200ee'},
                        headerTintColor: '#fff',
                        headerStyle: styles.header,
                        headerShadowVisible: false,
                        // LEFT ICON: Hamburger for the Left Drawer
                        headerLeft: () => (
                            <View style={{backgroundColor: 'blue', height: 50,}}>
                                <TouchableOpacity onPress={() => navigation.getParent()?.openDrawer()}>
                                    <MaterialCommunityIcons name="menu" size={24} style={{marginLeft: 16}}/>
                                </TouchableOpacity>
                            </View>
                        ),
                        // RIGHT ICON: Three Dots for the Right Drawer
                        headerRight: () => (
                            <Pressable onPress={() => navigation.openDrawer()}>
                                <MaterialCommunityIcons name="dots-vertical" size={24} style={{marginRight: 16}}/>
                            </Pressable>
                        ),
                    }}
                >
                    <Drawer.Screen name="index" options={{drawerLabel: 'Home'}}/>
                </Drawer>
            </View>
        </Drawer>


    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
    },
    headerButton: {
        paddingHorizontal: 16,
    },
    drawerHeader: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});