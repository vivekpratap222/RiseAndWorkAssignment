import * as React from 'react';
import { View, FlatList, Button, TouchableOpacity, Col, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListUl, faUser, faChartPie, faChartBar, faSortAmountDown, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import List from './ListComponent';
import ModalComponent from './ModalComponent';

const Tab = createBottomTabNavigator();

function Bars() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ color: "white" }}>Bars!</Text>
        </View>
    );
}

function Charts() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ color: "white" }}>Charts!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black" }}>
            <Text style={{ color: "white" }}>Profile!</Text>
        </View>
    );
}

function ListPage() {
    const titleText = React.useState("$31.32");
    const Button1 = React.useState("Deposit");
    const Button2 = React.useState("Withdraw");
    const listHead = React.useState("RECENT TRANSACTIONS");
    const pageHead = React.useState("US Dollar");
    const [toggle, setToggle] = React.useState(false);
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "black" }}>
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <FontAwesomeIcon icon={faDollarSign} color="black" style={{ backgroundColor: "white", borderRadius: 25, padding: 10, marginRight: 5 }} />
                    </View>
                    <View>
                        <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>{pageHead}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, alignItems: 'center', color: "white", justifyContent: "flex-end", marginBottom: 25 }}>
                    <View>
                        <Text style={{ fontWeight: "bold", color: "white", fontSize: 28 }}>{titleText}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "white", fontSize: 12 }}>{titleText}</Text>
                    </View>
                </View>
                <ModalComponent />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", padding: 20 }} >
                        <Text style={{ color: "gray", fontSize: 16, textAlign: 'left' }}>{listHead}</Text>
                        <FontAwesomeIcon icon={faSortAmountDown} color="#696969" style={{ marginLeft: 160 }} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <List sort={toggle} />
            </View>
        </View>
    );
}


function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'white',
                    showLabel: false,
                    style: { backgroundColor: '#000000', borderTopWidth: 0 }
                }}>
                <Tab.Screen
                    name="Bar"
                    options={{
                        tabBarLabel: 'Bar',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesomeIcon icon={faChartBar} color="#696969" size={24} />
                        ),
                    }}
                    component={Bars} />
                <Tab.Screen
                    name="Chart"
                    options={{
                        tabBarLabel: 'Chart',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesomeIcon icon={faChartPie} color="#696969" size={24} />
                        ),
                    }}
                    component={Charts} />
                <Tab.Screen
                    name="List"
                    options={{
                        tabBarLabel: 'List',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesomeIcon icon={faListUl} color="#696969" size={24} />
                        ),
                    }}
                    component={ListPage} />
                <Tab.Screen
                    name="Profile"
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesomeIcon icon={faUser} color="#696969" size={24} />
                        ),
                    }}
                    component={Profile} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 15,
        paddingHorizontal: 50,
        borderRadius: 8,
        marginHorizontal: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
});

export default MyTabs;