import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <FontAwesome size={60} name="camera" style={styles.boxIcon} />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>Scan new index</Text>
                </View>
            </View>
        </View>
    );
};
const cardColor = "#03a1fc";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        margin: 15,
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
