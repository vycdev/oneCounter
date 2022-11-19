import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default (props: {
    date: Date;
    type: "Water" | "Gas" | "Electricity";
    paid: boolean;
}) => {
    const iconName =
        props.type === "Water"
            ? "bathtub"
            : props.type === "Gas"
            ? "fire"
            : "bolt";

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <FontAwesome size={20} name={iconName} style={styles.boxIcon} />

                <View style={styles.boxContent}>
                    <Text style={styles.boxContentText}>{props.type} Bill</Text>
                    <Text style={styles.boxContentTextDate}>
                        Due {props.date.toLocaleDateString()}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const cardColor = "#2b2b2b";

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
        marginLeft: 25,
        marginRight: 5,
        width: "10%",
        color: "#fff",
        backgroundColor: cardColor,
    },
    boxContentText: {
        backgroundColor: cardColor,
        fontSize: 20,
        fontWeight: "bold",
    },
    boxContentTextDate: {
        backgroundColor: cardColor,
        fontSize: 18,
        // fontWeight: "bold",
    },
});
