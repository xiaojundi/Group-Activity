
import React, { useState } from "react";
import { View, StyleSheet, Button, ScrollView, Text } from "react-native";


const Home = ({ navigation }) => {
    return <>
        <Text>
            home page
        </Text>
        <Button
            title="创建活动"
            onPress={() =>
                navigation.navigate('creatActivity', { name: '创建活动' })
            }
        />
    </>

};

export default Home;