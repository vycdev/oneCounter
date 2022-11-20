import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <MaterialCommunityIcons
                    size={25}
                    name="alert-circle"
                    style={styles.boxIcon}
                />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>Report Problem</Text>
                </View>
            </View>
        </View>
    );
};

const cardColor = "#ff5900";

const styles = StyleSheet.create({
    container: {
        width: "50%",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        margin: 5,
        // marginTop: 10,
        marginBottom: 0,
        width: "90%",
        height: "auto",
        borderRadius: 100,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: cardColor,
    },
    boxContent: {
        display: "flex",
        fontSize: 20,
    },
    boxIcon: {
        margin: 15,
        marginRight: 5,
        // marginLeft: 35,
        width: "20%",
        color: "#fff",
        backgroundColor: cardColor,
    },
    boxContentText: {
        backgroundColor: cardColor,
        fontSize: 14,
        fontWeight: "bold",
    },
});
