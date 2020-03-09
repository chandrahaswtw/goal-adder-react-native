import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalList = (props) => {
    return (
        <TouchableOpacity onPress={props.goalRemover}>
            <View style={styles.goalText}>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goalText: {
        padding: 5,
        backgroundColor: "#81ecec",
        borderRadius: 5,
        marginVertical: 5
    }
})

export default GoalList;