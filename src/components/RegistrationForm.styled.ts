import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  background: white;
  border: 1px solid black;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  font-family: Arial;
  max-width: max-content;
`;

export const SteperWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
