import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import NotifCard from "./notifications/NotifCard";

export default function NotifcationsScreen() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Notifications</Text> */}

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
            <NotifCard
                paid={false}
                failed={false}
                date={new Date()}
                type="Gas"
                title="You have a bill to pay!"
                description="Don't forget"
            ></NotifCard>
            <NotifCard
                paid={true}
                failed={false}
                date={new Date()}
                type="Water"
                title="You can do better!"
                description="The mean consumption in your area is lower than yours with 24%. We belive that you can also be as efficient."
            ></NotifCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
