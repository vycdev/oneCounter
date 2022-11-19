import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <FontAwesome size={30} name="warning" style={styles.boxIcon} />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>Report a problem</Text>
                </View>
            </View>
        </View>
    );
};

const cardColor = "#fa7a25";

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
        marginLeft: 35,
        width: "20%",
        color: "#fff",
        backgroundColor: cardColor,
    },
    boxContentText: {
        backgroundColor: cardColor,
        fontSize: 20,
        fontWeight: "bold",
    },
});
