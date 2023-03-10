// Single
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
let names = [];
export default function App() {
  const [data, setData] = useState ('');

  const saveData=async()=>{
    names.push(data);
    try {
      await AsyncStorage.setItem('DATA', JSON.stringify(names));
      console.log('saved');
    } catch(e) {
      // save error
    }
  }

  const getData=async()=>{
    try {
      const name = await AsyncStorage.getItem('DATA');
      console.log('name:'+name);
    } catch(e) {
      // save error
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        placeholder="Enter data"
        value={data}
        onChangeText={txt => setData(txt)}
        style={{
          width:'60%',
          height:50,
          borderWidth:1,
          paddingLeft:20
        }}
      />
        
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
