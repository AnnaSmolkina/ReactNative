import {FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {LoadingComponent} from "../components/Loading.component";
import {styles} from "../app.styles";
import {MovieDataComponent} from "../components/MovieData.component";

export const MovieInfo = ({route, navigation}) => {
    const [isMovie, setIsMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { url, title } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title,
        });
        axios.get(`${url}`)
            .then((res) => {
                setIsMovie(res.data);
            })
            .catch((err) => {
                console.log(err.error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoadingComponent />
            </View>
        );
    }

    const dataArray = [
        { subtitle: '', content: isMovie.opening_crawl},
        { subtitle: 'Director:', content: isMovie.director},
        { subtitle: 'Producer:', content: isMovie.producer},
        { subtitle: 'Release date:', content: isMovie.release_date},
    ];
    return (
        <View style={styles.infoBlock}>
            <FlatList
                data={dataArray}
                renderItem={({ item }) => (
                    <MovieDataComponent content={item.content} subtitle={item.subtitle} />
                )}
            />
        </View>
    )
}