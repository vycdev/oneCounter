import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Switch } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Bogdan Daniel</Text>
                {/* <Text style={styles.boxIcon}> &gt; </Text> */}
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.title}>Direct Debits</Text>
                <Text style={styles.boxIcon}> &gt; </Text>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.title}>Change Password</Text>
                <Text style={styles.boxIcon}> &gt; </Text>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.title}>Language</Text>
                <Text style={styles.boxIcon}> &gt; </Text>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.title}>Notifications</Text>
                <Text style={styles.boxIcon}> &gt; </Text>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.title}>Theme</Text>
                <View style={styles.boxIcon}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        // ios_backgroundColor="#3e3e3e"
                        // onValueChange={toggleSwitch}
                        // value={isEnabled}
                    />
                </View>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.row}>
                <Text style={styles.titleLogOut}>Log Out</Text>
                {/* <Text style={styles.boxIcon}> &gt; </Text> */}
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 10,
        // alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        margin: 10,
        marginLeft: 15,
        // fontWeight: "bold",
    },
    titleLogOut: {
        fontSize: 20,
        margin: 10,
        marginLeft: 15,
        color: "#b00505",

        // fontWeight: "bold",
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: "100%",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    boxIcon: {
        // width: "50%",
        fontSize: 20,
        margin: 10,
        marginLeft: "auto",
        marginRight: 15,
    },
});
