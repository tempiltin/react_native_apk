import { Text, View ,Pressable} from 'react-native';
import css from '../styles/Style'
function GoalItem(props) {
  console.log(props.id);
    return (
        <Pressable  onPress={props.deleteGoalHandler}>
        <View key={props.text} style={css.addToDo}>
        <Text style={css.text}>{props.item}</Text>
      </View>
      </Pressable>
 )
}
export default GoalItem;