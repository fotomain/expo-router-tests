import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {Link} from "expo-router";

export const CREATE_MEDIA_POST1 = '../create/mediapost'
export const CREATE_MEDIA_POST2 = '../../create/mediapost'
export const UPLOAD_TO_GOOGLEDRIVE = '../../upload/googledrive'

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
            <Link href={CREATE_MEDIA_POST2} push asChild>
                <Button title={"create/mediapost"}/>
            </Link>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Link href={UPLOAD_TO_GOOGLEDRIVE} push asChild>
                <Button title={"upload/googledrive"}/>
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
