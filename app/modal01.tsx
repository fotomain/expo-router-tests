import {Link} from 'expo-router';
import {Easing, Pressable, StyleSheet, Text} from 'react-native';
import Animated, {
    FadeIn,
    SlideInDown,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import {useEffect} from "react";

export default function Modal() {


    const offset = useSharedValue(100);

    offset.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp),
    });

    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(offset.value * 255, {
                        damping: 20,
                        stiffness: 90,
                    }),
                },
            ],
        };
    });

    useEffect(() => {
        setTimeout(() => {
            offset.value = Math.random()
        }, 500)
    }, []);

    return (
        <Animated.View
            entering={FadeIn}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00000040',
            }}
        >
            {/* Dismiss modal when pressing outside */}
            <Link href={'/'} asChild>
                <Pressable style={StyleSheet.absoluteFill}/>
            </Link>
            <Animated.View
                entering={SlideInDown}
                style={[{
                    width: '90%',
                    height: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }, customSpringStyles]}
            >
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>Modal Screen</Text>
                <Link href="/">
                    <Text>← Go back</Text>
                </Link>
            </Animated.View>
        </Animated.View>
    );
}