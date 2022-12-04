import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  border: dashed;
  border-radius: 40px;
  padding: 2rem;
  margin: 1rem;
  font-family: Arial;
  display: flex;
  width: fit-content;
  margin: auto;
  background-color: white !important;
`;

export const SteperWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 2.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
