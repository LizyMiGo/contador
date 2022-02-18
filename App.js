import React, {useState, useEffect} from "react";
import {Text, View, Button} from 'react-native';

const style = {
  fontSize: 30,
};

const NuevoComponente = ({text}) => {
  return <Text style={style}>{text}</Text>
};

const App = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() =>{
    const temporizador = setInterval(()=>{
      setSegundos(segundos => segundos + 1);
    },1000);
    return () => clearInterval(temporizador);
  }, []);
  
  return (
    

    <View>
      <NuevoComponente text = ":"/>
      <NuevoComponente text ={segundos}/>
    </View>
    
  );
};
export default App;