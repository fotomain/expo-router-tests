import {Button, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "expo-router";

export default function Test1() {
    const navigation = useNavigation();


    return (<View style={styles.container}>
            <Text>test1 test1 test1 test1 test1 </Text>
            <View style={styles.separator}/>

            <Button title={"BACK"}
                    onPress={() => {
                        if (navigation.canGoBack()) {
                            navigation.goBack();
                        }
                    }}
            />

        </View>
    );
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
