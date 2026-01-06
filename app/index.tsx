import {Button, Text, View} from "react-native";
import {Link, useRouter} from "expo-router";
import {CREATE_MEDIA_POST, MEDIA_POSTS} from "@/router/routes";

export default function HomeIndexLayout() {
    const router = useRouter();
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
            <Link href={{pathname: MEDIA_POSTS}} push asChild>
                <Button title={"MEDIA_POSTS"}/>
            </Link>
        </View>
    )
}