import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import { FlatList, Text, View } from 'react-native';
import AddDialog from '../../components/AddDialog';
import List from '../../components/List';
import { addTask, doTask, getTasks } from '../../services/storage';

import { Container } from './styles';

const Todo = () => {

  const [showDialog, setShowDialog] = useState({
    show: false,
    category: ''
  });
  const [inputValue, setInputValue] = useState('');
  const [categories, setCategories] = useState([]);
  

  useFocusEffect(useCallback(() => {
    loadCategories();
  },[]))

  const loadCategories = () => {
    getTasks().then((res => {
      setCategories(res)
    }))
  }
  
  const handleTogglePopup = (categoryName) => {
    setShowDialog({
      show: !showDialog.show,
      category: categoryName || ''
    });
    setInputValue('');
  }

  const handleAddTask = async (categoryName, taskName) => {
    if(categoryName && taskName){
      addTask(categoryName, taskName)
        .then(() => {
          handleTogglePopup();
          loadCategories();
        });
    }
  }

  const handleChangeInputValue = (text) => {
    setInputValue(text);
  }


  const handleChangeTask = (categoryName, taskName, done) => {
    doTask(categoryName, taskName, done)
      .then(() => {
        loadCategories()
      })
  }

  return (
    <Container>
      <AddDialog 
        visible={showDialog.show}
        title="Adicionar tarefa" 
        cancelText="Cancelar" 
        onCancel={handleTogglePopup} 
        confirmText="Adicionar"
        onConfirm={() => handleAddTask(showDialog.category, inputValue)}
        inputValue={inputValue}
        onChangeText={handleChangeInputValue}
      />

      <FlatList 
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={
          ({item: category}) => 
          <>
            <List 
              title={category.name} 
              tasks={category.tasks} 
              onAddMore={() => handleTogglePopup(category.name)}
              onChangeTask={
                (taskName, value) => handleChangeTask(category.name, taskName, value ) 
              }  
            />
            <View style={{height: 10}} />
          </>
        }
      />
      
    </Container>
  );
}

export default Todo;