// app/(drawer)/_layout.tsx
import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import CustomDrawerContent from "@/app/CustomDrawerContent";
import {useNavigation} from "@react-navigation/native"
import {useState} from "react";


export default function Layout() {
    const navigation: any = useNavigation();

    const [open, setOpen] = useState<boolean>(true)

    return (
        <Drawer

            // open={open as boolean}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                // 1. Custom App Bar Styling
                headerStyle: {backgroundColor: '#6200ee'},
                headerTintColor: '#fff',

                // 2. Custom Drawer Icon (replaces default hamburger)
                headerLeft: () => {
                    // return <Pressable onPress={() => {
                    //     navigation.dispatch(DrawerActions.openDrawer());
                    // }}>
                    //     <Text style={{color: "#fff"}}>XXXX</Text>
                    // </Pressable>
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

    );
}
