import React from 'react';
import { Text } from 'react-native';


const DisplayCard = (props) => {

    return (
        <Text>
            {props.value} {props.auralString}
        </Text>
    );
}