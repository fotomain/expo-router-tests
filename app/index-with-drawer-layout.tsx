import {Button, Text, View} from "react-native";
import {Link, useRouter} from "expo-router";
import React, {useState} from "react";
import {Drawer} from "react-native-drawer-layout";
import {CREATE_MEDIA_POST, VIEW_MEDIA_POSTS} from "@/router/routes";
import {Ionicons} from "@expo/vector-icons";

export default function HomeIndexLayout() {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(true)
    return (
        <View style={{height: '100%',}}>
            <Drawer
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                renderDrawerContent={() => {
                    return <Text>Drawer menu</Text>;
                }}
            >
                <View style={{backgroundColor: "red", justifyContent: "center", flexDirection: "column", height: 60}}>
                    <View style={{backgroundColor: "red", flexDirection: "row"}}>
                        <Ionicons name="menu" size={24} color="#007AFF"
                                  onPress={() => setOpen((prevOpen) => !prevOpen)}
                        />
                        {/*<Button*/}
                        {/*    onPress={() => setOpen((prevOpen) => !prevOpen)}*/}
                        {/*    title={`${open ? 'Close' : 'Open'} drawer`}*/}
                        {/*/>*/}
                        <Text> HomeIndexLayout app</Text>
                    </View>
                </View>

                <Link href={CREATE_MEDIA_POST} push asChild>
                    <Button title={`CREATE_MEDIA_POST from home 111 ${CREATE_MEDIA_POST}`}/>
                </Link>
                <Button title={`CREATE_MEDIA_POST from home 222 ${CREATE_MEDIA_POST}`}
                        onPress={() => {
                            router.push(
                                {
                                    pathname: CREATE_MEDIA_POST,
                                }
                            );
                        }}
                />
                {/*level 1 -> becouse home is in /home */}
                <Link href={{pathname: VIEW_MEDIA_POSTS}} push asChild>
                    <Button title={"VIEW_MEDIA_POSTS"}/>
                </Link>


            </Drawer>
            {/*level 1 -> becouse home is in /home */}
        </View>
    )
}