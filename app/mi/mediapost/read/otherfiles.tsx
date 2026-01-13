import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {Link} from "expo-router";
import {CREATE_MEDIA_POST} from "@/router1/routes";


const MediaPostOtherFilesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Other Files</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
            <Link href={CREATE_MEDIA_POST} push asChild>
                <Button title={"CREATE_MEDIA_POST 555"}/>
            </Link>

        </View>
    )
}

export default function OtherFilesRoute() {
    return (
        <MediaPostOtherFilesScreen/>
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
