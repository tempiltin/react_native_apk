import { Button, TextInput, View } from 'react-native'
import css from '../styles/Style'
function GoalInput ({
    enteredGoalText,
    goalInputHandler,
    addGoalHandler
}){
   return <>
   
   <View style={css.inputContainer}>
          <TextInput
            placeholder='Iltimos nimadir yozing !'
            style={css.textInput}
            value={enteredGoalText}
            onChangeText={goalInputHandler}
          />
          <Button title='Add'
            onPress={addGoalHandler}
          />
        </View>
   </>
}

export default GoalInput;