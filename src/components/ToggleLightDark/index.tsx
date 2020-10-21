import React, { useState } from "react"
import { TouchableOpacity, View, Animated, Easing, StyleSheet } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useLightDark } from '../../hooks/HLightDark';


const ToggleLightDark: React.FC = () => {

  const [temaLight, setTemaLight] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const { temaPadrao, trocarTema } = useLightDark();


  const toggleHandle = (): void => {

    const newValue = !temaLight;
    setTemaLight(newValue);
    Animated.timing(animatedValue,
      {
        toValue: newValue ? 5 : 0,
        useNativeDriver: false,
        duration: 500,         // in milliseconds, default is 500
        easing: Easing.bounce, // Easing function, default is Easing.inOut(Easing.ease)
        delay: 0,
      }
    ).start();

    if (newValue) {
      trocarTema('light');
    } else {
      trocarTema('dark');
    }
  }


  const estilos = StyleSheet.create({
    botaoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 70,
      height: 40,
      borderRadius: 32,
      padding: 4,
      backgroundColor: temaPadrao.fundoSecundario,
    },

    bolaContainer: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: '#fff',

    }
  });

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={estilos.botaoContainer}
        onPress={toggleHandle}
      >
        {
          temaLight &&
          <Animated.View>
            <FontAwesome name="moon-o" color="yellow" size={20} />
          </Animated.View>
        }
        <Animated.View style={[estilos.bolaContainer, {
          transform: [{
            translateX: animatedValue,
          }]
        }]} />
        {
          !temaLight &&
          <Animated.View>
            <Fontisto name="day-sunny" color="yellow" size={20} />
          </Animated.View>
        }
      </TouchableOpacity>
    </View>
  )

}


export default ToggleLightDark;