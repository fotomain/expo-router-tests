import {StatusBar} from 'expo-status-bar';
import {Button, Platform, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {useLocalSearchParams} from "expo-router/build/hooks";
import {useNavigation} from "expo-router";

import Animated, {useAnimatedStyle, useSharedValue, withTiming,} from 'react-native-reanimated';
import {useEffect} from "react";

export default function ModalScreen() {


    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);

    useEffect(() => {
        opacity.value = withTiming(1, {duration: 400}); // Fade in duration
        translateY.value = withTiming(0, {duration: 400}); // Slide in duration
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{translateY: translateY.value}],
        };
    });

    const params = useLocalSearchParams()
    console.log("params ModalScreen", params)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle, {backgroundColor: 'red', padding: 20}]}>
                <Text style={styles.title}>Modal</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
                <EditScreenInfo path="app/modal.tsx"/>
                <Button title={"Back"} onPress={() => navigation.goBack()}/>
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'}/>
            </Animated.View>
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
