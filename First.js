import React from 'react';
import { View, Text, Button } from "react-native";

/**
 * @namespace First.js
 * @author macbookpro/xiaobo
 * @type IFirstProps
 * @datetime 2021-12-28 23:09:53
 * @param props
 * @description
 */
const First = props => {
  return (
    <View style={{flex:1}}>
      <Text>Hello First!</Text>
      <Button title={'查看bug'} onPress={() => props.navigation.navigate('Sec')} />
    </View>
  );
};

export default First;
