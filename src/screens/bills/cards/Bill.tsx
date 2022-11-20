import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

export default (props: {
    date: Date;
    type: "Water" | "Gas" | "Electricity";
    paid: boolean;
}) => {
    const iconName =
        props.type === "Water"
            ? "water"
            : props.type === "Gas"
            ? "fire"
            : "flash";
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: props.paid
                        ? "#2b2b2b"
                        : Colors[colorScheme].tint,
                    ...styles.box,
                }}
            >
                <MaterialCommunityIcons
                    size={24}
                    name={iconName}
                    style={styles.boxIcon}
                />

                <View
                    style={{
                        ...styles.boxContent,
                    }}
                >
                    <Text style={styles.boxContentText}>{props.type} Bill</Text>
                    <Text style={styles.bottomText}>
                        <View style={styles.textView}>
                            <Text style={styles.boxContentTextDate}>
                                Due {props.date.toLocaleDateString()}
                            </Text>
                        </View>
                        {!props.paid ? (
                            <View style={styles.textView}>
                                <Text style={styles.boxContentTextDateRight}>
                                    {"        "}Tap to pay
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.textView}>
                                <Text style={styles.boxContentTextDateRight}>
                                    Tap for details
                                </Text>
                            </View>
                        )}
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
        // backgroundColor: cardColor,
    },
    boxContent: {
        display: "flex",
        fontSize: 20,
        width: "80%",
    },
    boxIcon: {
        margin: 20,
        // marginLeft: 25,
        marginRight: 5,
        width: "10%",
        color: "#fff",
        // backgroundColor: cardColor,
    },
    boxContentText: {
        // backgroundColor: cardColor,
        fontSize: 20,
        fontWeight: "bold",
    },
    boxContentTextDate: {
        // backgroundColor: cardColor,
        fontSize: 18,
        // fontWeight: "bold",
        // textAlign: "right",
    },
    boxContentTextDateRight: {
        // backgroundColor: cardColor,
        fontSize: 18,
        // minWidth: "100%",
        // backgroundColor: "green",
        textAlign: "center",
        marginLeft: 70,
    },
    bottomText: {
        width: "100%",
        // position: "relative",
        // backgroundColor: "black",
        // flex: 1,

        flexDirection: "row",
        alignItems: "center",
        // textAlign: "right",
        justifyContent: "space-between",
        // paddingRight: 1,
    },
    textView: {
        flex: 1,
        // justifyContent: "space-between",
        // textAlign: "right",
        // flexDirection: "row",
        // width: "100%",
        // padding: 20,
    },
});
