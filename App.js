import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import header from './components/header';
import Header from "./components/header";

export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Buy Coffe', key: '1'},
        {text: 'Fuck my wfie', key: '2'},
        {text: 'Tell my wife I love her', key: '3'},
        {text: 'Work hard on GigaGov', key: '4'}
    ])

  return (
  <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          {/* to form */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                    <Text>{item.text}</Text>
                )}
              />
          </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
        padding: 40,

    },
    list: {
        marginTop: 20,
    }
});
