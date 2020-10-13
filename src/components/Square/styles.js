import styled from "styled-components/native";

import { Animated } from "react-native";

export const Square = styled(Animated.View)`
  width: 100px;
  height: 100px;
  background: blue;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: white;
  font-size: 28px;
`;
