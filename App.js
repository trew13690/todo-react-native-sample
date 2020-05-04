import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'Alex', key: '1'},
        {name: 'Mai', key: '2'},
        {name: 'Han', key: '3'}
    ]);
  return <View style={styles.container}>
      <ScrollView>
      {people.map(item => (
          <View key={item.key}>
 <Text style={styles.item}>{item.name}</Text>
  </View>
      ))}
      </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20
  },

    item:{
      marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
});
