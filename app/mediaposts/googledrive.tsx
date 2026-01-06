import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {Link} from "expo-router";
import {CREATE_MEDIA_POST2} from "@/constants/routes";


const MediaPostGoogleDriveScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>googledrive Screen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
            <Link href={CREATE_MEDIA_POST2} push asChild>
                <Button title={"create/mediapost"}/>
            </Link>

        </View>
    )
}

export default function MediaPostGoogleDriveRoute() {
    return (
        <MediaPostGoogleDriveScreen/>
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
