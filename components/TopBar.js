import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation:9
    }
})


