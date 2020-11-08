import React from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";

// import { Container } from './styles';

const AddDialog = (
    {
      visible, 
      title, 
      text, 
      onCancel, 
      onConfirm, 
      cancelText, 
      confirmText,
      inputValue,
      onChangeText
    }
  ) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      {!!text &&
        <Dialog.Description>
        {text}
        </Dialog.Description>
      }
      <Dialog.Input 
        onChangeText={onChangeText} 
        value={inputValue} 
        style={{
          borderBottomColor: '#efefef',
          borderBottomWidth: 1
        }} 
      />
      <Dialog.Button label={cancelText} onPress={onCancel} />
      <Dialog.Button label={confirmText} onPress={onConfirm} />
    </Dialog.Container>
);
}

export default AddDialog;