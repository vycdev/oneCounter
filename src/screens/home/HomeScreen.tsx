import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import NewReading from "./cards/NewReading";
import NextIndexDue from "./cards/Calendar";
import ProblemReporting from "./cards/ProblemReporting";
// import QuickPay from "./cards/QuickPay";
import Recommendations from "./cards/Recommendations";
import ManageCounters from "./cards/Manage Counters";
import AddCounter from "./cards/AddCounter";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Hello George</Text> */}
            <View style={styles.sameRowButtons}>
                <NewReading />
                <ProblemReporting />
            </View>
            {/* <QuickPay /> */}
            <View style={styles.sameRowButtons}>
                <AddCounter />
                <ManageCounters />
            </View>
            <View style={styles.calendarView}>
                <NextIndexDue />
            </View>
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
    sameRowButtons: {
        width: "95%",
        // marginLeft: 10,
        marginTop: 10,
        // height: "auto",
        // display: "flex",
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // margin: 10,
    },
    calendarView: {
        width: "100%",
        height: "56%",
        marginBottom: 15,
    },
});
