import { StyleSheet } from "react-native";

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
                <Bill date={new Date()} paid={false} type={"Water"} />
                <Bill date={new Date()} paid={false} type={"Electricity"} />
                <Bill date={new Date()} paid={false} type={"Gas"} />
                <Bill date={new Date()} paid={true} type={"Water"} />
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
