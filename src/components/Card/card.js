import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import styles from './card.style';

const Card = ({text, deleteTask, item, number, setNumber}) => {
  const [completed, setCompleted] = useState(false);
  const drawItem = () => {
    if (completed === false) {
      setCompleted(!completed);
      setNumber(number - 1);
    } else {
      setCompleted(!completed);
      setNumber(number + 1);
    }
  };
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return (
    <View
      style={[
        styles.item,
        completed
          ? {backgroundColor: 'gray', borderRadius: 15}
          : {backgroundColor: '#7da453', borderRadius: 5},
      ]}>
      <TouchableOpacity
        onPress={() => {
          drawItem();
        }}
        onLongPress={() => deleteTask(item)}>
        <Text
          style={[
            styles.todoText,
            completed
              ? {textDecorationLine: 'line-through'}
              : {textDecorationLine: 'none'},
          ]}>
          {text}
        </Text>
        <View style={styles.timeContainer}>
          <Text style={styles.date}>
            {date}/{month}/{year}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
