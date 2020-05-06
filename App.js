import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddToDo from "./components/addTodo";
import Sandbox from "./components/sandbox";
export default function App() {

    const [todos, setTodos] = useState([
        {text: 'Buy Coffe', key: '1'},
        {text: 'Fuck my Wife', key: '2'},
        {text: 'Tell my Wife I love her', key: '3'},
        {text: 'Work hard on GigaGov', key: '4'}
    ])

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        });
    }


    const submitHandler = (text) => {
        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevTodos
                ];
            })
        }
        else{
           Alert.alert('OOPS!','todo must be over 3 characters', [
               {text: 'Understood', onPress: () => console.log('alert closed')}
           ])
        }
    }
  return (
     // <Sandbox/>
     <TouchableWithoutFeedback onPress={()=>{
         Keyboard.dismiss();
         console.log('dismissed keyboard')
     }}>
 <View style={styles.container}>
     <Header />
     <View style={styles.content}>
         <AddToDo submitHandler={submitHandler}/>
         <View style={styles.list}>
             <FlatList
               data={todos}
               renderItem={({item}) => (
                   <TodoItem item={item}  pressHandler={pressHandler}/>
               )}
             />
         </View>
     </View>
 </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex: 1,

    },
    list: {
        flex: 1,
        marginTop: 20,
    }
});
