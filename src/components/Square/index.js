import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

import * as S from "./styles";

const Square = () => {
  const eixo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(eixo, {
          toValue: 1,
          duration: 250
        }),
        Animated.timing(eixo, {
          toValue: 0,
          duration: 250
        })
      ])
    ).start();
  }, [eixo]);

  return (
    <S.Square
      style={{
        transform: [
          {
            rotate: eixo.interpolate({
              inputRange: [0, 1],
              outputRange: ["-6deg", "6deg"]
            })
          }
        ]
      }}
    >
      <S.Text>N</S.Text>
    </S.Square>
  );
};

export default Square;
