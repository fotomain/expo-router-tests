import {useRouter} from 'expo-router';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from "react";
import IoniCons from "react-native-vector-icons/Ionicons";
import {Menu} from "react-native-paper";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {DELETE_USER, READ_MEDIA_POSTS} from "@/router1/routes";

export default function DrawerRightScreen(props: any) {
    const router = useRouter();

    const rightMenuItems = [
        {
            id: '01-2',
            title: 'Make Photo',
            icon: 'camera-outline',
            gotoRoute: READ_MEDIA_POSTS,
            IconElement: IoniCons
        },
        {id: '01-3', title: 'Record Video', icon: 'videocam-outline', IconElement: IoniCons},
        {id: '01-4', title: 'Record Audio', icon: 'musical-notes-outline', IconElement: IoniCons},
        {id: '01-5', title: 'Paste URL', icon: 'copy'},
        {id: '5', title: 'Paste YouTube', icon: 'youtube'},
        {id: '6', title: 'Upload PDF', icon: 'file-pdf'},
        {id: '70', title: 'Upload MS Word', icon: 'file-word'},
        {id: '80', title: 'Upload Txt', icon: 'file-text'},
        {id: '90', title: 'Upload Image', icon: 'file-image'},
        {id: '100', title: 'New Web Page', icon: 'link'},
        {id: '200', title: 'divider'},
        {
            id: '201-1',
            title: 'Flow',
            icon: 'clipboard-flow-outline',
            gotoRoute: READ_MEDIA_POSTS,
            IconElement: MaterialCommunityIcons
        },
        {id: '201-2', title: 'divider'},
        {
            id: '201-3',
            title: 'Dlelete Account',
            icon: 'trash-can-outline',
            runRouterPush: () => {
                router.push({
                    pathname: DELETE_USER,
                    params: {
                        entityName: "userAccount",
                        entityData: JSON.stringify({deleteAutomaticaly: true, email: "ss@ss.lv"})
                    } as any
                })
            },
            IconElement: MaterialCommunityIcons
        },
        // {id: '15', title: 'Notifications', icon: '🔔'},
        // {id: '35', title: 'Notifications', icon: '🔔'},
        // {id: '45', title: 'Notifications', icon: '🔔'},
        // {id: '55', title: 'Notifications', icon: '🔔'},
        // {id: '65', title: 'Notifications', icon: '🔔'},
        // {id: '75', title: 'Notifications', icon: '🔔'},
        // {id: '85', title: 'Notifications', icon: '🔔'},
    ];

    //
    // const renderMenuItem0 = ({item}: { item: any }) => (
    //     <TouchableOpacity
    //         style={styles.menuItem}
    //     >
    //         <Text style={styles.menuIcon}>{item.icon}</Text>
    //         <Text style={styles.menuText}>{item.title}</Text>
    //     </TouchableOpacity>
    // );

    const renderMenuItem = ({item}: { item: any }) => {

        if (item.title === "divider") {
            return <Text>----------------</Text>
        }

        const router: any = useRouter()

        return (

            <Menu.Item
                onPress={() => {
                    if (item?.gotoRoute) {
                        router.push({pathname: item?.gotoRoute})
                    }
                    if (item?.runRouterPush) {
                        item.runRouterPush()
                    }

                    props.setOpen(false);
                }}
                leadingIcon={(p: any) => {

                    if (item?.IconElement) {
                        return <item.IconElement name={item.icon} {...p}/>
                    } else {
                        return <AntDesign name={item.icon} {...p} />
                    }

                }
                }
                title={item.title}
            />
        )
    }


    return (
        <View style={styles.container}>
            {/* Header - Fixed */}
            <View style={styles.header}>
                <View style={stylesAll.colMax}>
                    <Text style={styles.headerText}>Fast Routes</Text>
                    <Text style={styles.headerSubtitle}>for the best UX/UI </Text>
                </View>
                <View style={{
                    gap: 12,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                    paddingLeft: 40,
                    // backgroundColor: '#f4f4f4'
                }}>
                    <Pressable onPress={() => {
                        props.setOpen(false);
                    }}>
                        <MaterialCommunityIcons name="home" size={24} color="white"/>
                    </Pressable>
                    <Pressable onPress={() => {
                        props.setOpen(false);
                    }}>
                        <MaterialCommunityIcons name="close" size={24} color="white"/>
                    </Pressable>

                </View>

            </View>

            {/* Scrollable Menu Items */}

            <FlatList
                data={rightMenuItems}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id}
                style={styles.list}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={true}
            />


            {/* Footer - Fixed */}
            <View
                style={{padding: 16}}
            >
                <Menu.Item
                    onPress={() => {
                    }}
                    leadingIcon={(p: any) => <IoniCons name="settings-outline" {...p} />}
                    title="Settings"
                />
            </View>
        </View>

    );
}

// backgroundColor: "red",
const stylesAll = StyleSheet.create({
    colMax: {flexGrow: 1, flexWrap: 'wrap', flexDirection: "column", display: "flex"},
    rowMax: {
        width: '100%',
    }
})

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    header: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: '#2D3047',
        // borderTopRightRadius: 20,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#CCCCCC',
        fontSize: 12,
        marginTop: 5,
    },
    list: {
        // flex: 1,
        height: 200
    },
    listContent: {
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    menuIcon: {
        fontSize: 20,
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#333333',
    },
    footer: {
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        alignItems: 'center',
    },
    footerText: {
        color: '#666666',
        fontSize: 12,
    },
});