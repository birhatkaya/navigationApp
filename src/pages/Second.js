import React from "react";
import {View,Text, Button} from 'react-native';

function Second(props) {

    const user = props.route.params.username;
    function backToFirst() {
        props.navigation.navigate('First');
    }

    return(
        <View>
            <Text>Merhaba 2</Text>
            <Text>{user}</Text>
            <Button title="Go Back" onPress={backToFirst} />
        </View>
    )
}
export default Second;