import {Button, View} from "react-native";
import {Link, useRouter} from "expo-router";
import React, {useState} from "react";
import {CREATE_MEDIA_POST, VIEW_MEDIA_POSTS} from "@/router/routes";

export default function HomeIndexLayout() {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(true)
    console.log("=== HomeIndexLayout");
    return (
        <View style={{height: '100%',}}>
            {/*<View style={{backgroundColor: "red", justifyContent: "center", flexDirection: "column", height: 60}}>*/}
            {/*    <View style={{backgroundColor: "red", flexDirection: "row"}}>*/}
            {/*        <Text> HomeIndexLayout app</Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

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
                <Button title={"VIEW_MEDIA_POSTS HOME"}/>
            </Link>
        </View>
    )
}