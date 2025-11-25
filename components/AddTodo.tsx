import { View, TextInput, Button, StyleSheet } from "react-native"

interface AddTodoProps {
  value: string
  onChange: (text: string) => void
  onSave: () => void
}

export function AddTodo({ value, onChange, onSave }: AddTodoProps) {
  
  return (
    <View style={styles.inputRow}>
      <TextInput 
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder='Add Todo'
      />
      <Button title='Save' onPress={onSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  }
})

export default AddTodo