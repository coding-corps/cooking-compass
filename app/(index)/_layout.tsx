import { Stack } from "expo-router";

export default function HomeScreenLayout() {
    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home"/>
            <Stack.Screen name="feed"/>
            </Stack>
    )
}
