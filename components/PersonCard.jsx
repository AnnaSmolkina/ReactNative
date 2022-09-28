import {Text, View} from "react-native";
import {styles} from "../app.styles";

export const PersonCard = ({name, gender,birth_year }) => {
    return (
        <View style={styles.contentCardContainer}>
            <Text style={styles.contentTitle}>{name}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Birth year: {birth_year}</Text>
        </View>
    )
}