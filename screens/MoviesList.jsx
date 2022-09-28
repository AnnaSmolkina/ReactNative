import { FlatList, RefreshControl, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {FilmCard} from "../components/FilmCard";
import {LoadingComponent} from "../components/Loading.component";

export const MoviesList = ({navigation}) => {
    const [isFilmsList, setIsFilmsList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setIsLoading(true);
        axios.get('https://swapi.dev/api/films/')
            .then(res => {
                 setIsFilmsList(res.data);
            })
            .catch((err) => {
                console.log(err.error);
            })
            .finally(() => {
            setIsLoading(false);
        })
    };

    useEffect( fetchData, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoadingComponent />
            </View>
        );
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
                data={isFilmsList.results}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MovieInfo', { url: item.url, title: item.title })}>
                        <FilmCard
                            title={item.title}
                            director={item.director}
                            producer={item.producer}
                            release_date={item.release_date}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}