import { ImageBackground, StatusBar, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Lab5 = ()=> {
    return(
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0" />
            <ImageBackground
                source={require('../../images/wallpaper.png')}
                style={styles.image}>
                <View style={styles.details}>
                    <Text style={styles.text}>
                        <Text style={styles.firstLine}> Discover {'\n'}</Text>
                        <Text style={styles.secondLine}> world with us</Text>
                    </Text>
                    <Text style={styles.textStyle}> Discover world with us </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text styles={styles.buttonText}>Get started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
export default Lab5;