import {View, Text, Button} from "react-native";
import {Link, Stack, useNavigation, useRouter} from "expo-router";

export  function AppRootScreen() {
    const router = useRouter();
    return(<View>
        <Text>AppRootScreen !</Text>
        <Link href='../create/mediapost' push asChild>
            <Button title={"create/mediapost"} />
        </Link>
        <Button title={"Create MediaPost"}
                onPress={() => {router.navigate('../create/mediapost')}}
        />
    </View>)
}

export default function AppRootLayout() {
    return(<AppRootScreen/>)

}