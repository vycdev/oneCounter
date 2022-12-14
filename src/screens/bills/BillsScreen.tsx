import { StyleSheet, Animated } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Bill from "./cards/Bill";
import DirectDebit from "./cards/DirectDebit";
import Filters from "./cards/Filters";

export default function BillsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.sameRowButtons}>
                <Filters />
                <DirectDebit />
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.billsList}>
                <Bill
                    date={new Date(new Date().setDate(25))}
                    paid={false}
                    type={"Water"}
                    failed={false}
                />
                <Bill
                    date={new Date(new Date().setDate(19))}
                    paid={false}
                    type={"Electricity"}
                    failed={false}
                />
                <Bill
                    date={new Date(new Date().setDate(15))}
                    paid={true}
                    type={"Gas"}
                    failed={false}
                />
                <Bill
                    date={new Date(new Date().setDate(15))}
                    paid={true}
                    type={"Gas"}
                    failed={true}
                />
                <Bill
                    date={new Date(new Date().setMonth(9))}
                    paid={true}
                    type={"Water"}
                    failed={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // margin: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        // fontWeight: "bold",
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: "95%",
    },
    billsList: {
        padding: 10,
        width: "100%",
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
});
