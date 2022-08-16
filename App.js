import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ComponenteCard from './ComponenteCard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text style={styles.title}>Meu App</Text>
      
      <ScrollView>
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
       <ComponenteCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50
  },
  title:{
    color:'#fff',
    fontSize: 24,
    marginBottom: 24
  }
});
