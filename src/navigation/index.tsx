/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import ModalScreen from "../screens/notifcations/NotificationsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

import StatsScreen from "../screens/stats/StatsScreen";
import MapScreen from "../screens/problemsMap/MapScreen";
import HomeScreen from "../screens/home/HomeScreen";
import BillsScreen from "../screens/bills/BillsScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import NotifcationsScreen from "../screens/notifcations/NotificationsScreen";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ animation: "fade_from_bottom" }}>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <Stack.Screen
                name="Notifications"
                component={NotifcationsScreen}
                options={{ title: "Notifications" }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabThree"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="TabOne"
                component={StatsScreen}
                options={{
                    title: "Stats",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="bar-chart" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={MapScreen}
                options={{
                    title: "Map",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={HomeScreen}
                options={({ navigation }: RootTabScreenProps<"TabThree">) => ({
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Notifications")}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome
                                name="bell-o"
                                size={22}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 20 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabFour"
                component={BillsScreen}
                options={{
                    title: "Bills",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="money" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabFive"
                component={SettingsScreen}
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="cog" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: 0 }} {...props} />;
}
