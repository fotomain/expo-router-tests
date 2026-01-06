import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {Link} from "expo-router";
import {CREATE_MEDIA_POST} from "@/constants/routes";


export function CreateMediaPostAbstractScreen() {
    return (
        <View style={styles.container}>
            <Text>Create MediaPost 222</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
            <Link href={CREATE_MEDIA_POST} push asChild>
                <Button title={"create/mediapost"}/>
            </Link>


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
