import {View, Text, Button} from "react-native";
import {Link} from "expo-router";

export default function HomeIndexLayout() {
    return(
        <View>
            <Text>Z IndexLayout</Text>
            <Link href='/two' push asChild>
                <Button title={"Go Two"} />
            </Link>
        </View>
    )
}