import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import NewReading from "./cards/NewReading";
import NextIndexDue from "./cards/Calendar";
import ProblemReporting from "./cards/ProblemReporting";
// import QuickPay from "./cards/QuickPay";
import Recommendations from "./cards/Recommendations";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Hello George</Text> */}
            <NewReading />
            {/* <QuickPay /> */}
            <NextIndexDue />
            <ProblemReporting />
            <Recommendations />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        width: "100%",
        marginLeft: 25,
        alignContent: "flex-start",
        fontSize: 16,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 10,
        height: 2,
        width: "100%",
    },
});
