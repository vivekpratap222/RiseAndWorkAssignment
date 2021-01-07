import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";
import Dialog from "react-native-dialog";

export default function ModalComponent(props) {
    const [visible, setVisible] = useState(false);
    const [ButtonType, setType] = useState('Deposit')
    const [value, onChangeText] = useState('');

    const showDialog = () => {
        setVisible(true);
        setType('Deposit');
    };

    const showDialog1 = () => {
        setVisible(true);
        setType('Withdraw');
    };

    const handleCancel = () => {
        setVisible(false);
        onChangeText('');
    };

    const handleDelete = () => {
        setVisible(false);
    };

    const handleSubmit = () => {
        setVisible(false);
        onChangeText('');
    }

    const Button1 = React.useState("Deposit");
    const Button2 = React.useState("Withdraw");

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "space-around", alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={showDialog}
                    >
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{Button1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={showDialog1}>
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{Button2}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Dialog.Container visible={visible}>
                <Dialog.Title style={{ fontWeight: "bold" }}>{ButtonType}</Dialog.Title>
                <Dialog.Input
                    numeric
                    keyboardType={'numeric'}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Amount">
                </Dialog.Input>
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Save" onPress={handleSubmit} />
            </Dialog.Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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