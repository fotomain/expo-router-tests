import {Button, StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router/build/hooks";
import {useNavigation} from "expo-router";

export function EdiMediaPostScreen() {
    const params: any = useLocalSearchParams()
    const navigation = useNavigation();
    // Alert.alert("Edit Media Post", params)
    console.log("Edit Media Post", params)
    return (
        <View style={styles.container}>

            <Text>Edit mediaPost {params?.guid}</Text>
            <View style={styles.separator}/>

            <Button title={"Back"} onPress={() => navigation.goBack()}/>

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
