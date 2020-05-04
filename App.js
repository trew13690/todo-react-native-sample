import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/TodoItem";


export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Buy Coffe', key: '1'},
        {text: 'Fuck my Wife', key: '2'},
        {text: 'Tell my Wife I love her', key: '3'},
        {text: 'Work hard on GigaGov', key: '4'}
    ])

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

  return (
  <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          {/* to form */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
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
