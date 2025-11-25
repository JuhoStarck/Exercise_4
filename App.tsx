import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoList from './components/TodoList';
import { Item } from './types/Item'

const STORAGE_KEY = 'TODO_LIST_ITEMS'

export default function App() {
  const [todos, setTodos] = useState<Item[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if (json) setTodos(JSON.parse(json))
      } catch (e) {
        
      }
    })
    ()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (input.trim()) {
      setTodos(prev => [
        ...prev,
        { id: Date.now().toString(), name: input.trim(), done: false}
      ])
      setInput('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo 
        value={input}
        onChange={setInput}
        onSave={addTodo}
      />
      <TodoList items={todos} onToggle={toggleTodo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
