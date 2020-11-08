import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AddButton from '../../components/AddButton';
import AddDialog from '../../components/AddDialog';
import CategoryItem from '../../components/CategoryItem';
import { deleteCategory, getTasks, saveCategory } from '../../services/storage';

import { Container } from './styles';

const Categories = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    getTasks().then((res => {
      setCategories(res)
    }))
  }

  useEffect(() => {
    loadCategories();
  }, [])
  
  const handleTogglePopup = () => {
    setShowDialog(!showDialog);
    setInputValue('');
  }

  const handleAddCategory = async (categoryName) => {
    if(categoryName){
      saveCategory(categoryName)
        .then(() => {
          handleTogglePopup();
          loadCategories();
        });
    }
    
  }

  const handleChangeInputValue = (text) => {
    setInputValue(text);
  }

  const handleDeleteCategory = (name) => {
    deleteCategory(name).then(() => {
      loadCategories()
    })
  }

  return (
    <Container>
      <AddDialog 
        visible={showDialog}
        title="Adicionar categoria" 
        cancelText="Cancelar" 
        onCancel={handleTogglePopup} 
        confirmText="Adicionar"
        onConfirm={() => handleAddCategory(inputValue)}
        inputValue={inputValue}
        onChangeText={handleChangeInputValue}
       />
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({item: category}) => 
          <>
            <CategoryItem 
              onPress={() => handleDeleteCategory(category.name)} 
              title={category.name} 
            />
            <View style={{
              height: 10
            }}/>
          </>
        }
      />
      <AddButton onPress={handleTogglePopup} />
    </Container>
  );
}

export default Categories;