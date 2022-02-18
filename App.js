import React, {useState, useEffect} from "react";
import {Text, View, Button} from 'react-native';

const style = {
  fontSize: 30,
};

const NuevoComponente = ({title}) => {
  return <Text style={style}>{title}</Text>
};

const App = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0)

  useEffect(() =>{
    const temporizador = setInterval(()=>{
      setSegundos(segundos => segundos + 1);

    },1000);

    if (segundos == 60){
      setMinutos(minutos => minutos + 1);
      setSegundos(0);
    }

    return () => clearInterval(temporizador);
  }, [segundos]);

  return (
    

    <View>
      <NuevoComponente title ="RELOJ"/>
      <Text style={{fontSize: 30}}> {(minutos < 10)? "0" + minutos : minutos} : {(segundos < 10)? "0" + segundos : segundos}</Text>

    </View>
    
  );
};
export default App;