import {Button, Text, View} from "react-native";
import {Link, useRouter} from "expo-router";
import {CREATE_MEDIA_POST} from "@/router/routes";

export function AppRootScreen() {
    const router = useRouter();
    return (<View>
        <Text>AppRootScreen !</Text>
        <Link href={CREATE_MEDIA_POST} push asChild>
            <Button title={"CREATE_MEDIA_POST 000"}/>
        </Link>
        <Button title={"CREATE_MEDIA_POST 111"}
                onPress={() => {
                    router.navigate(CREATE_MEDIA_POST)
                }}
        />
    </View>)
}

export default function AppRootLayout() {
    return (<AppRootScreen/>)

}