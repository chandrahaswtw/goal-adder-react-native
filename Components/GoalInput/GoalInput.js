import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {

  const [enteredText, setEnteredText] = useState("");

  const inputTextHandler = (changedText) => {
    setEnteredText(changedText);
  }

  return (
    <Modal animationType="slide" visible={props.modalState}>

      {/* CONTENT START */}
      <View style={styles.wrapper}>
        <TextInput placeholder="Enter your goal" onChangeText={inputTextHandler}
          style={styles.goalInput}>
        </TextInput>
        <View style={styles.buttonArray}>
          <View style={styles.buttonStyles}><Button title="ADD" onPress={props.onPressHandler.bind(this, enteredText)}></Button></View>
          <View style={styles.buttonStyles}><Button title="CANCEL" color="red" onPress={props.modalToggler}></Button></View>
        </View>
      </View>
      {/* CONTENT END */}

    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flexGrow: 1,
    justifyContent: "center",
    padding:10
  },
  goalInput: {
    borderWidth: 1,
    padding: 5,
    borderColor: "#ccc",
  },
  buttonArray: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20
  },
  buttonStyles: {
    width: "40%"
  }
})

export default GoalInput;