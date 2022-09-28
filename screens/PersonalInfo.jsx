import { FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {styles} from "../app.styles";
import {LoadingComponent} from "../components/Loading.component";
import {PersonalDataComponent} from "../components/PersonalData.component";

export const PersonalInfo = ({route, navigation}) => {
    const [isFullPersonInfo, setIsFullPersonInfo] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { url, title } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title,
        });
        axios.get(`${url}`)
            .then((res) => {
                setIsFullPersonInfo(res.data);
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
        { subtitle: 'Birth:', content: isFullPersonInfo.birth_year},
        { subtitle: 'Gender:', content: isFullPersonInfo.gender},
        { subtitle: 'Height:', content: isFullPersonInfo.height},
        { subtitle: 'Mass:', content: isFullPersonInfo.mass},
        { subtitle: 'Hair color:', content: isFullPersonInfo.hair_color},
        { subtitle: 'Skin color:', content: isFullPersonInfo.skin_color},
        { subtitle: 'Eye color:', content: isFullPersonInfo.eye_color},
    ];

    return (
        <View style={styles.infoBlock}>
            <FlatList
                data={dataArray}
                renderItem={({ item }) => (
                    <PersonalDataComponent content={item.content} subtitle={item.subtitle} />
                )}
            />
        </View>
    )
}