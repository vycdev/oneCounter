import { Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
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
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                verticalLabelRotation={20}
                yAxisSuffix={""}
            />
            <Text style={styles.title}>Your Spendings</Text>
            <BarChart
                // style={graphStyle}
                data={data}
                width={Dimensions.get("screen").width - 50}
                height={300}
                yAxisLabel="$"
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientTo: "#08130D",
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                verticalLabelRotation={20}
                yAxisSuffix={""}
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
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
