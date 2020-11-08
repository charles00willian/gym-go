import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Container, Title } from './styles';

const CategoryItem = ({onPress, title}) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Entypo name="circle-with-minus" size={30} color="red" onPress={onPress} />
    </Container>
  );
}
View
export default CategoryItem;