import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';



export default function App() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50');
      setUsers(data.results);
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{
        text: 'Retry',
        onPress: () => {
          fetchUser()
        }
      }])
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleLike = () => {
    console.log('like');
    nextUser();
  }

  const handlePass = () => {
    console.log('pass');
    nextUser();
  }

  const nextUser = () => {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View styles={styles.swipes}>
        {
          users.length > 1 && 
            users.map(
              (u, i) => 
                currentIndex === i && (
                  <Swipes 
                    key={i} 
                    users={users} 
                    currentIndex={currentIndex} 
                    handleLike={handleLike} 
                    handlePass={handlePass}
                    >
                      
                    </Swipes>
                )
            )
        }
      </View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});
