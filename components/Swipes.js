import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {RectButton} from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

export default function Swipes({users, currentIndex, handleLike , handlePass}) {
    
    const renderLeftActions = () => {
        return (
        <RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
        </RectButton>   
        )
    }
    const renderRightActions = () => {
        return (
        <RectButton style={styles.container}>
            <SwipeableImage user={users[currentIndex + 1]}></SwipeableImage>
        </RectButton>
        )
    }

    return (
        <Swipeable 
            friction={2}
            leftThreshold={40}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
            onSwipeableLeftOpen={handleLike}
            onSwipeableRightOpen={handlePass}
        >
            <SwipeableImage user={users[currentIndex]}>

            </SwipeableImage>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },


})
