import {Stack} from "expo-router";

export default function UploadToGoogleDriveLayout() {
    const systemState: any = {enableUpload: false}
    return (
        <Stack>
            <Stack.Protected guard={systemState.enableUpload}>
                <Stack.Screen name="index"/>
            </Stack.Protected>
            <Stack.Screen name="notalloved"/>
        </Stack>


    )
}

