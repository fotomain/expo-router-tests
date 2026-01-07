import {useRouter} from 'expo-router';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Divider, Menu} from "react-native-paper"
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import IoniCons from "react-native-vector-icons/Ionicons"
import React, {useEffect} from "react";

export default function DrawerRightScreen(props: any) {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
        }, 500)
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={true}
            bounces={true}
            style={{flex: 1}} {...props}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
                backgroundColor: '#f4f4f4'
            }}>
                <Text style={{fontWeight: 'bold'}}>Fast Routes</Text>
                <Pressable onPress={() => {
                    props.setOpen(false);
                }}>
                    <MaterialCommunityIcons name="close" size={24} color="black"/>
                </Pressable>

            </View>

            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="file-pdf" {...p} />}
                title="Upload PDF"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="file-word" {...p} />}
                title="Upload MS Word"
            />


            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="file-text" {...p} />}
                title="Upload Txt"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="file-image" {...p} />}
                title="Upload Image"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="link" {...p} />}
                title="Paste URL"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <AntDesign name="youtube" {...p} />}
                title="Paste YouTube"
            />
            <Divider/>
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <IoniCons name="camera-outline" {...p} />}
                title="Make Photo"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <IoniCons name="videocam-outline" {...p} />}
                title="Record Video"
            />
            <Menu.Item
                onPress={() => {
                }}
                leadingIcon={(p: any) => <IoniCons name="musical-notes-outline" {...p} />}
                title="Record Audio"
            />


            <Divider/>

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

        </ScrollView>
    );
}

