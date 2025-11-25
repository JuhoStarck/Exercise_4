import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Item } from '../types/Item'

interface TodoListProps {
  items: Item[]
  onToggle: (id: string) => void
}

export default function TodoList({ items, onToggle }: TodoListProps) {
  return (
    <View style={styles.list}>
      <FlatList 
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onToggle(item.id)}>
            <View style={styles.row}>
              <Text style={ item.done ? styles.done : styles.text}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
  row: {
    marginBottom: 10,
    marginLeft: 5,
  },
  text: {
    fontSize: 15,
  },
  done: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.5,
  }
})