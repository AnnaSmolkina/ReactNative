import {Text, View} from "react-native";

export const PersonalDataComponent = ({ subtitle,content }) => (
    <View style={{ padding: 5 }}>
        <Text>
            <Text style={{ color: '#3AC0C9', fontWeight: 'bold'}}> {subtitle} </Text>
            {content}
        </Text>
    </View>
)