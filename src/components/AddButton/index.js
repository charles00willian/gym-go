import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import { Container } from './styles';

const AddButton = ({onPress}) => {
  return (
    <Ionicons 
      name="ios-add-circle" 
      size={50} color="blue" 
      onPress={onPress} 
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        // right: 100,
        // zIndex
      }}
    />
  );
}

export default AddButton;