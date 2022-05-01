import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Button, View } from 'react-native';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import Menu from '../../components/week3/Menu';
import { Signup } from '../../components/week3/Signup';


export default function Travel() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingTop : 50  }}>
                {/* <Text> Week 3 </Text> */}
                <Menu />
                <Card />
                <Hotel />
                <Signup />
            </View>
            <Button title="Back" onPress={() => navigation.goBack("")} />
            </View>
        </ScrollView>
 
    );
}
