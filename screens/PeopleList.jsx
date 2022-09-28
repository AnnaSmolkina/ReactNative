import { FlatList, RefreshControl,TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {PersonCard} from "../components/PersonCard";
import {LoadingComponent} from "../components/Loading.component";

export const PeopleList = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPeopleList, setIsPeopleList] = useState();

    const fetchData = () => {
        setIsLoading(true);
        axios.get('https://swapi.dev/api/people/')
            .then(res => {
                setIsPeopleList(res.data);
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
                data={isPeopleList.results}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PersonalInfo', { url: item.url, title: item.name })}>
                        <PersonCard name={item.name} gender={item.gender} birth_year={item.birth_year}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}