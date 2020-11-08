import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Container } from './styles';

const ListItem = ({text, checked, onCheckboxValueChange}) => {
  return (
    <Container>
      <CheckBox value={checked} onValueChange={onCheckboxValueChange} />
      <Text style={{
        fontSize: 18,
        textDecorationLine: checked ? 'line-through' : 'none'
      }} >
        {text}
      </Text>

    </Container>
  );
}

export default ListItem;