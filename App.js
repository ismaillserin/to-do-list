import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListItem,
  Alert,
} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/AddToDo';
import Cards from './src/components/Card';

const App = () => {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([
    {id: '1', task: 'Read a book', complete: false},
    {id: '2', task: 'Do sport', complete: false},
    {id: '3', task: 'Go to  the cinema', complete: false},
    {id: '4', task: 'Play game', complete: false},
  ]);

  const [number, setNumber] = useState(4);
  const [completed, setCompleted] = useState(false);
  const deleteTask = item => {
    return Alert.alert('Delete', 'Do you want to delete this todo?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          setTodos(todos.filter(i => i !== item));
          setNumber(todos.length - 1);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header todo={todos} number={number} setNumber={setNumber} />
      <View style={styles.texts}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Cards
              number={number}
              setNumber={setNumber}
              setTodos={setTodos}
              deleteTask={deleteTask}
              item={item}
              text={item.task}
            />
          )}
        />
      </View>
      <Footer
        number={number}
        setNumber={setNumber}
        todo={todos}
        setTask={setTask}
        task={task}
        todos={todos}
        settodos={setTodos}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#102027',
    padding: 10,
  },
  texts: {
    flex: 4,
  },
  deneme: {
    backgroundColor: 'red',
  },
});
