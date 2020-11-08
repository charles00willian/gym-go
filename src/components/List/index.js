import React from 'react';
import { View, Text } from 'react-native';
import ListItem from '../ListItem';
import { Ionicons } from '@expo/vector-icons';

 import { Container, AddMore } from './styles';

const List = ({title, tasks = [], onChangeTask, onAddMore}) => {

  const handleChangeTask = (taskName, value) => {
    onChangeTask(taskName, value)
  }

  return (
    <View>
      <Text style={{marginBottom: 5, fontSize: 18, marginLeft: 15}}>
        {title}
      </Text>
      <Container>
        {
          tasks.map(task => 
            <ListItem 
              key={task.name}
              checked={task.done} 
              text={task.name} 
              onCheckboxValueChange={
                (value) => {handleChangeTask(task.name, value);}
              } 
            />
          )
        }
        <AddMore onPress={onAddMore} >
          <Text 
            style={{
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            Adicionar
          </Text>
          <Ionicons name="ios-add" size={24} color="#fff" />
        </AddMore>
      </Container>
    </View>
  );
}

export default List;