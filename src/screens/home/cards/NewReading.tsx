import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <MaterialCommunityIcons
                    size={25}
                    name="numeric"
                    style={styles.boxIcon}
                />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>Read Index</Text>
                </View>
            </View>
        </View>
    );
};
const cardColor = "#03a1fc";

const styles = StyleSheet.create({
    container: {
        width: "50%",
        // height: "100%",
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
