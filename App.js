import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Trew');
  const [person, setPerson] = useState({name: "Mai", age: 21})
  const clickHandler = () => {
      if (name === 'Trew')
      {
          setName('Mai');
          setPerson({name: "Mai", age: 21})
      }
      else{
          setName("Trew")

          setPerson({name: "Alex", age: 28})
      }
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>Her name is {person.name} and her age is {person.age}</Text>
      <View style={styles.buttonContainer}>
       <Button title="Update Name" onPress={clickHandler}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonContainer: {
      marginTop: 20
    }
});
