import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {Link, useNavigation, useRouter} from "expo-router";
import {CREATE_MEDIA_POST2, EDIT_MEDIA_POST, UPLOAD_TO_GOOGLEDRIVE} from "@/constants/routes";


const MediaPostYouTubeScreen = () => {
    const navigation: any = useNavigation();
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MediaPostYouTubeScreen</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
            <Link href={CREATE_MEDIA_POST2} push asChild>
                <Button title={"create/mediapost"}/>
            </Link>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Link href={UPLOAD_TO_GOOGLEDRIVE} push asChild>
                <Button title={"upload/googledrive"}/>
            </Link>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Link href="../edit/mediapost/1" push asChild>
                <Button title={"EDIT_MEDIA_POST 1"}/>
            </Link>
            <Link href={{
                pathname: "../edit/mediapost/[guid]",
                params: {guid: 2}
            }} push asChild>
                <Button title={"EDIT_MEDIA_POST 2"}/>
            </Link>

            <Button title={"EDIT_MEDIA_POST 3"}
                    onPress={() => {
                        router.push(
                            {
                                pathname: EDIT_MEDIA_POST,
                                params: {guid: 333}
                            }
                        );
                    }}
            />

        </View>
    )
}

export default function YouTubeRoute() {
    return (
        <MediaPostYouTubeScreen/>
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
