import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.style';

const Header = ({todo, setNumber, number}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.toDoTitle}>THINGS TO DO </Text>
      <Text style={styles.numberOfToDo}>{number}</Text>
    </View>
  );
};

export default Header;
