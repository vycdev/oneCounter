import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <MaterialCommunityIcons
                    size={30}
                    name="leaf-circle-outline"
                    style={styles.boxIcon}
                />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>
                        Try spending less time in the shower to save water and
                        help the planet.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const cardColor = "#32a852";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        margin: 15,
        marginTop: 0,
        width: "90%",
        height: "auto",
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: cardColor,
    },
    boxContent: {
        display: "flex",
        fontSize: 20,
    },
    boxIcon: {
        margin: 20,
        marginVertical: "10%",
        // marginLeft: 35,
        width: "10%",
        color: "#fff",
        backgroundColor: cardColor,
    },
    boxContentText: {
        maxWidth: "85%",
        marginVertical: 10,
        backgroundColor: cardColor,
        fontSize: 16,
        fontWeight: "bold",
    },
});
