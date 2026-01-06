import {StyleSheet} from 'react-native';
import {Drawer} from "react-native-paper"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {DrawerContentScrollView} from "@react-navigation/drawer";

const DrawerItems = () => {
    return (
        <DrawerContentScrollView
            alwaysBounceVertical={false}
            style={[
                styles.drawerContent,
                {
                    // backgroundColor: colors.surface,
                },
            ]}
        >
            <Drawer.Item
                // icon="clipboard-flow-outline"
                icon={(p: any) => (
                    <MaterialCommunityIcons name="clipboard-flow-outline" {...p} size={26}/>
                )}
                label="Flow"
                onPress={() => {
                    console.log("Pressed1")
                    // @ts-ignore
                    navigation.navigate("Card2")
                }}
            />

        </DrawerContentScrollView>
    )

}


const styles = StyleSheet.create({
    annotation: {
        marginHorizontal: 24,
        marginVertical: 6,
    },
    badge: {
        alignSelf: "center",
    },
    collapsedSection: {
        marginTop: 16,
    },
    drawerContent: {
        flex: 1,
    },
    languageRow: {
        alignItems: "center",
        display: "flex",
        // eslint-disable-next-line react-native/sort-styles
        // backgroundColor: "red",
        // maxWidth: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingLeft: 20,
        // paddingRight: 0,
    },
    modesRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 0,
    },
    preference: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    pricingContent: {
        // transform:{sc}
        flexDirection: "row",
        flex: 1,
    },
    recordMediaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
    },
    switches: {
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        height: 56,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    v3Preference: {
        height: 56,
        paddingHorizontal: 28,
    },
})

export default DrawerItems

