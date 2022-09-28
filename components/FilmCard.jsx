import {Text, View} from "react-native";
import {styles} from "../app.styles";

export const FilmCard = ({title, director, producer, release_date }) => {
    return (
        <View style={styles.contentCardContainer}>
            <Text style={styles.contentTitle}>{title}</Text>
            <Text>Director: {director}</Text>
            <Text>Producer: {producer}</Text>
            <Text>Release: {release_date}</Text>
        </View>
    )
}