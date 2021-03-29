import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function SwipeableImage( {user} ) {
    return (
        <View>
            <Image source= {{uri: user.picture.large}} style={styles.photo}/>
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={[styles.textPrimary, styles.textShadow]}>{user.name.first}</Text>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.dob.age}</Text>
                </View>
                <View style={styles.textRow}>
                    <FontAwesome name="map-marker" size={20} color="white"></FontAwesome>
                    <Text style={[styles.textSecondary, styles.textShadow]}>{user.location.city}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 40,
    },
    textContainer: {
        position: 'absolute',
        bottom: 100,
        left: 30,
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrimary: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    textSecondary: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 10
    }
})
