// Single
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function App() {

  const saveData=async()=>{

    try {
    //  await AsyncStorage.setItem('DATA', JSON.stringify(names));
    await AsyncStorage.setItem('name', 'Kaithrin');
      console.log('saved');
    } catch(e) {
      // save error
    }
  }

  const getData=async()=>{
    try {
      const name = await AsyncStorage.getItem('name');
      console.log('name:'+name);
    } catch(e) {
      // save error
    }
  }

  const deleteData=async()=>{
    try {
      await AsyncStorage.removeItem('name');
    } catch(e) {
      // save error
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     
        
      <TouchableOpacity
        style={{
          width: "60%",
          height: 50,
          marginTop:50,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={() => {
          saveData();
        }}
      >
        <Text>Save Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "60%",
          height: 50,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          marginTop:30,
          borderRadius: 10,
        }}
        onPress={() => {
          getData();
        }}
      >
        <Text>Get Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "60%",
          height: 50,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          marginTop:30,
          borderRadius: 10,
        }}
        onPress={() => {
          deleteData();
        }}
      >
        <Text>Delete Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
