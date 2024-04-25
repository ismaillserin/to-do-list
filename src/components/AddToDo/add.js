import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Card from '../Card';
import styles from './add.style';

const Add = ({task, setTask, todos, settodos, setNumber, number}) => {
  const [id, setid] = useState(5);

  const handleAddText = text => {
    if (task === '') {
      return 0;
    } else {
      settodos([...todos, {id: id, task}]);
      setid(id + 1);
      setNumber(number + 1);
      setTask('');
    }
  };

  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.addToDo}
        placeholderTextColor={'#636a6c'}
        placeholder="ADD SOMETHING . . . "
        onChangeText={text => setTask(text)}
        value={task}
        onSubmitEditing={text => handleAddText(text)}
      />
      <TouchableOpacity
        style={styles.saveContainer}
        onPress={() => {
          handleAddText();
        }}>
        <Text style={styles.saveButton}>SAVE </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
