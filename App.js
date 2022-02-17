import React, {useState, useEfect} from "react";
import {Text, View, Button} from 'react-native';

const style = {
  fontSize: 30,
};

const NuevoComponente = ({title}) => {
  return <Text style={style}>{title}</Text>
};

const App = () => {

  return (
    <View>
      <NuevoComponente title ="contador:"/>

    </View>
  );
};
export default App;