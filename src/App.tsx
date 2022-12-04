import { useState } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import RegistrationForm from "./components/Register/RegistrationForm";

export const Container = styled.div`
  background-color: #f5f5f5;
`;

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <RegistrationForm />
      </Container>
    </>
  );
}

export default App;
