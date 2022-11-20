import { Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const data = {
    labels: ["Jul.", "Aug.", "Sep.", "Oct.", "Nov."],
    datasets: [
        {
            data: [20, 45, 50, 80, 99],
        },
    ],
};
const dataConsumption = {
    labels: ["Jul.", "Aug.", "Sep.", "Oct.", "Nov."],
    datasets: [
        {
            data: [25, 40, 50, 55, 67],
        },
    ],
};

export default function StatsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Spendings</Text>
            <BarChart
                // style={graphStyle}
                data={data}
                width={Dimensions.get("screen").width - 50}
                height={300}
                yAxisLabel="$"
                yAxisSuffix={""}
                chartConfig={{
                    // backgroundColor: "#fff",
                    // backgroundGradientFrom: "#1E2923",
                    // backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                verticalLabelRotation={20}
            />
            <Text style={styles.title}>Your Consumption</Text>
            <BarChart
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
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
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
