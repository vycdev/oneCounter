import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                userInterfaceStyle={"dark"}
                initialRegion={{
                    latitude: 44.42862979866011,
                    longitude: 26.117950327024886,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 44.42862979866011,
                        longitude: 26.117950327024886,
                    }}
                ></Marker>
                <Marker
                    coordinate={{
                        latitude: 44.44862979866011,
                        longitude: 26.137950327024886,
                    }}
                    image={require("../../assets/images/warning.png")}
                ></Marker>
                <Marker
                    coordinate={{
                        latitude: 44.42062979866011,
                        longitude: 26.127950327024886,
                    }}
                    image={require("../../assets/images/warning.png")}
                ></Marker>
                <Marker
                    coordinate={{
                        latitude: 44.41862979866011,
                        longitude: 26.137950327024886,
                    }}
                    image={require("../../assets/images/warning.png")}
                ></Marker>
                <Marker
                    coordinate={{
                        latitude: 44.39862979866011,
                        longitude: 26.107950327024886,
                    }}
                    image={require("../../assets/images/warning.png")}
                ></Marker>
                <Marker
                    coordinate={{
                        latitude: 44.42862979866011,
                        longitude: 26.097950327024886,
                    }}
                    image={require("../../assets/images/warning.png")}
                ></Marker>
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
