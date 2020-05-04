import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'Alex', key: '1'},
        {name: 'Mai', key: '2'},
        {name: 'Han', key: '3'},
        {name: 'Korina', key: '4'},
        {name: 'Susan', key: '5'},
        {name: 'Bob', key: '6'},
        {name: 'Jill', key: '7'}
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id)
        })
    }
  return (
  <View style={styles.container}>
   {/*   <ScrollView>
          {people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
     ))}
     </ScrollView>*/}

     <FlatList
         numColumns={2}
         keyExtractor={(item)=> item.id}
         data={people}
         renderItem={({item}) => (
             <TouchableOpacity onPress={() => pressHandler(item.id)}>
                 <Text style={styles.item}>{item.name}</Text>
             </TouchableOpacity>
             )}/>
  </View>
  );
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
      margin: 10,
      backgroundColor: 'pink',
      fontSize: 24
    }
});
