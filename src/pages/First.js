import React from "react";
import {View,Text, Button} from 'react-native';

function First(props) {
    


    function navigateToPage() {
        props.navigation.navigate('Second', {username: 'second'});
    }

    return(
        <View>
            <Text>Merhaba 1</Text>
            <Button title="Go to second page" onPress={navigateToPage}/>
        </View>
    )
}
export default First;