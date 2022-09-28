import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentCardContainer: {
        backgroundColor: '#F8F7F5',
        marginBottom: 10,
        padding: 10,
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:20,
    },
    contentTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom:10,
        textAlign:'center',
        margin: 'auto'
    },
    listCard: {
        borderStyle: "solid",
        backgroundColor: '#F8F7F5',
        marginBottom: 10,
        height: 150,
        width: 250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    infoBlock: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F8F7F5',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    }
});