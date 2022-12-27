import React, { useState } from 'react';
import {
  Button,
  View,
  FlatList
} from 'react-native';
import css from './styles/Style';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {


  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [addData, setAddData] = useState([]);
  const [state, setState] = useState(false);

  const handleClick = () => {
    if (state) {
      setState(false)
    } else {
      setState(true)
    }
    console.log(state)
  }

  function goalInputHandler(entredText) {
    setEnteredGoalText(entredText)
  }
  function addGoalHandler() {
    if (enteredGoalText.length) {

      setAddData(addData => [
        ...addData,
        { text: enteredGoalText, key: Math.random().toString() }
      ])
    }
    setEnteredGoalText('');
  }
  function deleteGoalHandler(id){

    console.log(id);
    setAddData(addData =>{
      return addData.filter((goal)=> goal.id !== id);

    })
  }
  return (
    <>

      <View style={css.appContainer} >
        <View style={css.btnCard}>
          <Button title={state ? "true" : "false"} onPress={handleClick} />
        </View>
        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
        />
        <FlatList

          data={addData}
          alwaysBounceVertical={false}
          renderItem={(item) => {
            return (
              <GoalItem 
              item={item.item.text}
              id={item.id}
              deleteGoalHandler={deleteGoalHandler}
              
              />
              // console.log(item.item.text)
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        >

        </FlatList>
      </View>

    </>
  );
}

// 