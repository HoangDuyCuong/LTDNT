import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        marginLeft: 80,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20,
    },
    firstLine:{
        color: 'white',
        fontSize: 50,
    },
    secondLine: {
        color: 'white',
        fontSize: 50,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    }
});