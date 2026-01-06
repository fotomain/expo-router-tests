// app/(drawer)/_layout.tsx
import {Drawer} from 'expo-router/drawer';
import {DrawerToggleButton} from '@react-navigation/drawer';
import CustomDrawerContent from "@/app/CustomDrawerContent";


export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                // 1. Custom App Bar Styling
                headerStyle: {backgroundColor: '#6200ee'},
                headerTintColor: '#fff',

                // 2. Custom Drawer Icon (replaces default hamburger)
                headerLeft: () => (
                    <DrawerToggleButton
                        tintColor="#fff"
                        // Or use a completely custom icon:
                        // children={<Ionicons name="menu-outline" size={28} color="white" />}
                    />
                ),
            }}
        >
            <Drawer.Screen name="index" options={{title: 'Home'}}/>
        </Drawer>
    );
}
