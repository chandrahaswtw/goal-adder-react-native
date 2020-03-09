import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalList from './Components/GoalList/GoalList';
import GoalInput from './Components/GoalInput/GoalInput';

export default function App() {

  const [goalArray, setGoalArray] = useState([]);
  const [modalState, setModalState] = useState(false);

  const modalToggler = () => {
    setModalState(!modalState)
  }

  const goalArrayHandler = (enteredText) => {
    setGoalArray(st => {
      return [...st, { key: String(st.length), value: enteredText }]
    })
    modalToggler();
  }

  const goalRemover = (i) => {
    const goalArrayClone = [...goalArray];
    goalArrayClone.splice(i, 1);
    setGoalArray(st => goalArrayClone)
  }


  return (
    <View style={AppStyles.root}>


      {/* HEADER SECTION */}
      <Button title="ADD GOAL" onPress={modalToggler}></Button>

      <GoalInput onPressHandler={goalArrayHandler} modalToggler={modalToggler} modalState={modalState}></GoalInput>

      {/* GOALS LIST */}
      <FlatList
        data={goalArray}
        renderItem={(dataItem) => <GoalList goalRemover={goalRemover.bind(this, dataItem.index)}>
          {dataItem.item.value}
        </GoalList>}>
      </FlatList>
    </View>
  );
}

const AppStyles = StyleSheet.create({
  root: {
    padding: 24
  }
})

