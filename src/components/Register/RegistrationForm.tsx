import React from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import {
  ButtonWrapper,
  FormContainer,
  SteperWrapper,
} from "../RegistrationForm.styled";

const RegistrationForm = () => {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([<div>One</div>, <div>Two</div>]);

  return (
    <FormContainer>
      <form>
        <SteperWrapper>
          {currentStepIndex + 1} / {steps.length}
        </SteperWrapper>
        <ButtonWrapper>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? "Submit" : "Next"}
          </button>
        </ButtonWrapper>
      </form>
    </FormContainer>
  );
};

export default RegistrationForm;
