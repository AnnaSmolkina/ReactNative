import {View, Text} from "react-native";
import {styles} from "../app.styles";

export const CatalogCard = ({title}) => (
    <View style={styles.listCard}>
        <Text style={styles.contentTitle}> { title }</Text>
    </View>
)