import {Text} from "@/components/Themed";
import {StyleSheet, View} from "react-native";
import {useLocalSearchParams} from "expo-router/build/hooks";

const DeleteMediaPostAbstractRoute = (props: any) => {
    return <View style={styles.container}>
        <Text style={styles.title}>DELETE</Text>
        <Text>{JSON.stringify(props)}</Text>
    </View>
}

export default function DeleteMediaPostLayout() {
    const params = useLocalSearchParams()
    return (<DeleteMediaPostAbstractRoute {...params}/>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
