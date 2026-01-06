import {Button, Text, View} from "react-native";
import {Link} from "expo-router";
import {CREATE_MEDIA_POST1} from "@/constants/routes";

export const MEDIA_POSTS = '../mediaposts'

export default function HomeIndexLayout() {
    return (
        <View>
            <Text>HomeIndexLayout</Text>
            <Link href='./home' push asChild>
                <Button title={"Go Home-RETURN STILL LAYOUT"}/>
            </Link>
            <Link href='./(tabs)' push asChild>
                <Button title={"Go Tabs"}/>
            </Link>
            {/*level 1 -> becouse home is in /home */}
            <Link href={CREATE_MEDIA_POST1} push asChild>
                <Button title={"create/mediapost from home"}/>
            </Link>
            {/*level 1 -> becouse home is in /home */}
            <Link href={MEDIA_POSTS} push asChild>
                <Button title={"MEDIA_POSTS"}/>
            </Link>
        </View>
    )
}