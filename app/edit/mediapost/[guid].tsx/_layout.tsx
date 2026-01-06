import {Button, StyleSheet, Text, View} from "react-native";
import {useSearchParams} from "expo-router/build/hooks";

export function EdiMediaPostScreen() {
    const params: any = useSearchParams()
    return (
        <View style={styles.container}>
            <Text>Edit mediaPost {params?.guid}</Text>
            <View style={styles.separator}/>

            <Button title={"OK"}/>

        </View>
    );


}

export default function EdiMediaPostLayout() {
    return (<EdiMediaPostScreen/>)
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
