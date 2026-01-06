import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRouter, useSegments} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

const CustomHeader = () => {
    const navigation = useNavigation();
    const route: any = useRouter();

    let prevRoute = ""
    let prevRoute2 = ""
    const segments = useSegments();
    const currentRoute: any = segments[segments.length - 1];

    if (segments.length > 1) {
        prevRoute = segments[segments.length - 2];
    }
    if (segments.length > 2) {
        prevRoute2 = segments[segments.length - 3];
    }

    console.log("=== route prevRoute2", prevRoute2)
    console.log("=== route prevRoute", prevRoute)
    console.log("=== route currentRoute1", currentRoute)

    // Map route names to display titles
    const getTitle = () => {
        switch (true) {
            case 'mediaposts' === currentRoute:
                return 'Video'; // 1st Tab = mediaposts = YouTube
            case 'webpage' === currentRoute:
                return 'Web Page';
            case 'googledrive' === currentRoute:
                return 'Files';
            case '(tabs)' === currentRoute:
                return 'Tabs Example';
            case 'googledrive' === currentRoute:
                return 'Files';
            case ('mediapost' === currentRoute && 'create' === prevRoute):
                return 'New Media Post';
            case ('[guid]' === currentRoute && 'mediapost' === prevRoute && 'edit' === prevRoute2):
                return 'Edit Media Post';
            default:
                return currentRoute + '-app7';
        }
    };

    // Show back button only if we can go back
    const canGoBack = navigation.canGoBack();

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#e5e5e5',
                backgroundColor: '#fff',
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                    {canGoBack ? (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{marginRight: 16}}
                        >
                            <Ionicons name="arrow-back" size={24} color="#000"/>
                        </TouchableOpacity>
                    ) : (
                        <View style={{marginRight: 16}}>
                            <Ionicons name="logo-react" size={24} color="#007AFF"/>
                        </View>
                    )}

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#000',
                    }}>
                        {getTitle()}
                    </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginLeft: 20}}>
                        <Ionicons name="notifications-outline" size={24} color="#000"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 20}}>
                        <Ionicons name="search-outline" size={24} color="#000"/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default CustomHeader;