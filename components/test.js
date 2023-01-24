import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar'

export default function Test() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Top</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity title="Use this photo"></TouchableOpacity>
            </View>
        </View>
        <StatusBar style="dark" />
        </>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
    top: {
        flex:0.7,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'gray'
    },
    bottom: {
        flex:0.3,
        width:'100%',
        alignItems:'center',
        backgroundColor: 'gray'
    }
  });

