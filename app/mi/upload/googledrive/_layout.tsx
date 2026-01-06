import {Button, StyleSheet, Text, View} from "react-native";
import {useEffect} from "react";
import {useNavigation} from "expo-router";

export function UploadToGoogleDriveScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (navigation.canGoBack()) {
                navigation.goBack();
            } else {
                // If no history, navigate to a fallback screen
                // navigation.navigate('\');
            }
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <View style={styles.container}>
            <Text>Upload to GoogleDrive</Text>
            <View style={styles.separator}/>

            <Button title={"CANCEL"}/>
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

export default function UploadToGoogleDriveLayout() {
    return (<UploadToGoogleDriveScreen/>)
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
