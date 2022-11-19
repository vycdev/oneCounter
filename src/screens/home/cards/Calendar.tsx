import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";

export default () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.box}> */}
            {/* <FontAwesome
                    size={60}
                    name="calendar-o"
                    style={styles.boxIcon}
                />
            */}
            <View style={styles.boxContent}>
                {/* <Text style={styles.boxContentText}>Next index due</Text> */}

                <Calendar
                    style={styles.box}
                    // theme={{  }}
                    // markingType={"multi-period"}
                    // Initially visible month. Default = now
                    initialDate={new Date().toISOString()}
                    // showSixWeeks={false}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={new Date().toISOString()}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={"2022-05-30"}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {
                        console.log("selected day", day);
                    }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {
                        console.log("selected day", day);
                    }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={"yyyy MM"}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    // onMonthChange={(month) => {
                    //     console.log("month changed", month);
                    // }}
                    // Hide month navigation arrows. Default = false
                    // hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => <Arrow />}
                    // Do not show days of other months in month page. Default = false
                    // hideExtraDays={true}
                    // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                    firstDay={1}
                    // Hide day names. Default = false
                    // hideDayNames={true}
                    // horizontal={true}
                    // pagingEnabled={true}
                    // Show week numbers to the left. Default = false
                    // showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={(subtractMonth) => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={(addMonth) => addMonth()}
                    // Disable left arrow. Default = false
                    // disableArrowLeft={true}
                    // Disable right arrow. Default = false
                    // disableArrowRight={true}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    // disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter
                    // renderHeader={(date) => {
                    //     /*Return JSX*/
                    // }}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                />
            </View>
            {/* </View> */}
        </View>
    );
};

const cardColor = "#03a1fc";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "57%",
    },
    box: {
        // display: "flex",
        // flexDirection: "row",
        margin: 10,
        marginBottom: 0,
        // marginTop: 5,
        // width: "90%",
        // height: "auto",
        // borderRadius: 10,
        // paddingBottom: 15,
        // justifyContent: "flex-start",
        // alignItems: "center",
        // backgroundColor: cardColor,
        // box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        shadowColor: "#010101",
    },
    boxContent: {
        // display: "flex",
        // fontSize: 20,
        width: "90%",
        // paddingBottom: -15,
        margin: 15,
        marginTop: 0,
        borderRadius: 10,

        height: "96%",
        backgroundColor: "#fff",
    },
    boxIcon: {
        margin: 20,
        width: "20%",
        color: "#fff",
        backgroundColor: cardColor,
    },
    boxContentText: {
        backgroundColor: cardColor,
        fontSize: 20,
        fontWeight: "bold",
    },
});
