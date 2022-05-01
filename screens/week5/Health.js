import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";
import Bmi from "../../components/week5/Bmi";
import Heartbeat from "../../components/week5/Heartbeat";

export default function Health() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </View>
        <Button title="Back" onPress={() => navigation.goBack("")} />
        </View>
    );
}