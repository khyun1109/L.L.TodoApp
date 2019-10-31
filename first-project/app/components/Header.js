import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => ( //Arrow function사용,() => (return값) 의 형태로 사용해주었습니다
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>경현'S 할 일 App!</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer:{
        marginTop:70,
        marginBottom:40,
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color:'#3f4e66',
    },
})

export default Header;