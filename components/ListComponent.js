import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { View, FlatList, Button, Row, TouchableOpacity, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LIST } from '../shared/list';
import { faPercentage, faArrowUp, faCompressAlt } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: LIST
        }
    }

    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={{ backgroundColor: "black" }}>
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, alignContent: "stretch" }}>
                            {item.icon == "t" ? <FontAwesomeIcon icon={faPercentage} color="gray" size="20" style={{ marginTop: 20 }} /> :
                                item.icon == "w" ? <FontAwesomeIcon icon={faArrowUp} color="gray" size="20" style={{ marginTop: 20 }} /> :
                                    <FontAwesomeIcon icon={faCompressAlt} color="gray" size="20" style={{ marginTop: 20 }} />}
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold", padding: 5, fontSize: 18 }}>{item.name}</Text>
                            <Text style={{ color: "gray", padding: 5, fontSize: 13 }}>{item.description}</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            {item.type == 1 ? <Text style={{ color: "white", fontWeight: "bold", padding: 5, fontSize: 18 }}>-${item.transaction_amount}</Text> :
                                <Text style={{ color: "white", fontWeight: "bold", padding: 5, fontSize: 18 }}>${item.transaction_amount}</Text>}
                            <Text style={{ color: "gray", padding: 5, fontSize: 13 }}>${item.balance}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    inverted={this.state.sort ? true : false}
                    data={this.state.lists}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}


export default List;
