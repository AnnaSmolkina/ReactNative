import {ActivityIndicator, Text, View} from "react-native";

export const LoadingComponent = () => {
        return (
            <View >
                <ActivityIndicator size={"large"} />
                <Text>Loading...</Text>
            </View>
        )
}