import {Text, View} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Main Application Content</Text>
            <Text>Swipe from left or right to open drawers!</Text>
        </View>
    );
}

