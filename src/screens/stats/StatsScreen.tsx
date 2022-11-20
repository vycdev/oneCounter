import { Dimensions, StyleSheet } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const data = {
    labels: [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "June",
        "July.",
        "Aug.",
        "Sep.",
        "Oct.",
    ],
    datasets: [
        {
            data: [20, 30, 35, 50, 45, 50, 60, 55, 70, 45],
        },
    ],
};
const dataConsumption = {
    labels: [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "June",
        "July.",
        "Aug.",
        "Sep.",
        "Oct.",
    ],
    datasets: [
        {
            data: [25, 35, 50, 80, 70, 90, 100, 110, 100, 90],
        },
    ],
};

export default function StatsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Spendings</Text>
            <LineChart
                style={{}}
                data={data}
                width={Dimensions.get("screen").width}
                height={300}
                yAxisLabel="€"
                yAxisSuffix={""}
                chartConfig={{
                    // backgroundColor: "#fff",
                    // backgroundGradientFrom: "#1E2923",
                    // backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(81, 208, 255, 0.8)`,
                    style: {
                        backgroundColor: "#1e88fa",
                        borderRadius: 16,
                    },
                }}
                verticalLabelRotation={20}
            />
            <Text style={styles.title}>Your Consumption</Text>
            <LineChart
                // style={graphStyle}
                data={dataConsumption}
                width={Dimensions.get("screen").width - 50}
                height={300}
                yAxisLabel=""
                yAxisSuffix={""}
                chartConfig={{
                    // backgroundColor: "#fff",
                    // backgroundGradientFrom: "#1E2923",
                    // backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(81, 208, 255, 0.8)`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                verticalLabelRotation={20}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
