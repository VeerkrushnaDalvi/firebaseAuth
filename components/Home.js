import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');


  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: taskText }]);
      setTaskText('');
    }
  };


  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };



  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo Home Page</Text>


      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task"
          style={styles.input}
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTask}
        style={styles.taskList}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft:20,
    width:'90%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#0782F9',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color:'black'
  },
  taskText: {
    flex: 1,
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 3,
  },
  removeButtonText: {
    color: 'white',
  },
  taskList: {
    flex: 1,
    // marginBottom: 20,
    color:'black',
  },
  text:{
    marginTop:100,
    marginBottom:20,
    textAlign:'center',
    fontFamily:'serif',
    color:'black',
    fontSize:30,
  }
});