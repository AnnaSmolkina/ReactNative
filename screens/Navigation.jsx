import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {MoviesList} from "./MoviesList";
import {PeopleList} from "./PeopleList";
import {NavigationContainer} from "@react-navigation/native";
import {MovieInfo} from "./MovieInfo";
import {PersonalInfo} from "./PersonalInfo";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name={'Home'} component={HomeScreen} options={{title: 'Catalog'}} />
               <Stack.Screen name={'MoviesList'} component={MoviesList} options={{title: 'Movies'}} />
               <Stack.Screen name={'PeopleList'} component={PeopleList} options={{title: 'People'}} />
               <Stack.Screen name={'PersonalInfo'} component={PersonalInfo}  />
               <Stack.Screen name={'MovieInfo'} component={MovieInfo} />
           </Stack.Navigator>
       </NavigationContainer>
    )
}