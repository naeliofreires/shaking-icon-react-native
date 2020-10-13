import React, { Component } from "react";
import styled from "styled-components/native";

import Square from "./components/Square";

const AppContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Square />
      </AppContainer>
    );
  }
}

export default App;
