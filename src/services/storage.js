import AsyncStorage from '@react-native-community/async-storage';

export async function getTasks() {
  // await AsyncStorage.removeItem('@lists/taskLists');
  const jsonValue = await AsyncStorage.getItem('@lists/taskLists');
  return jsonValue !== null ? JSON.parse(jsonValue) : [];
}

async function saveCategories(categories) {

  return AsyncStorage.setItem('@lists/taskLists', JSON.stringify(categories))
}

export async function saveCategory(name) {
  const categories = await getTasks();

  if(!categories.some(e => e.name === name)){
    categories.push({
      name,
      tasks: [],
    })
  }

  return saveCategories(categories);
}

export async function deleteCategory(name) {
  const categories = await getTasks();

  return saveCategories(categories.filter(e => e.name !== name));
}

export async function addTask(categoryName, taskName) {
  const categories = await getTasks();

  categories.forEach(category => {
    if(category.name === categoryName){
      category.tasks.push({
        name: taskName,
        done: false,
      })
    }
  })
  return saveCategories(categories);

}

export async function doTask(categoryName, taskName, done = false) {
  const categories = await getTasks();

  categories.forEach(category => {
    if(category.name === categoryName){
      category.tasks.forEach(task => {
        if(task.name === taskName){
          task.done = done;
        }
      })
    }
  })

  return saveCategories(categories)
}