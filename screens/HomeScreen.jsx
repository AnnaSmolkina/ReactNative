import { FlatList, TouchableOpacity, View} from "react-native";
import {CatalogCard} from "../components/CatalogCard";

export const HomeScreen = ({navigation}) => {
    const dataArray = [
        {
            title: "Movie",
            link: 'MoviesList'
        },
        {
            title: "People",
            link: 'PeopleList'
        }
    ]
    return (
            <View>
                <FlatList
                    data={dataArray}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(`${item.link}`, { id: item.id, title: item.title })}>
                            <CatalogCard title={item.title}/>
                        </TouchableOpacity>
                    )} />
            </View>

    )
};