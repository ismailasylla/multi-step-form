import React, { FormEvent, useState } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import ConfirmationDetails from "../Confirmation/ConfirmationDetails";
import OfficeDetailsForm from "../Office/OfficeDetailsForm";
import PersonalInfoForm from "../PersonalInfo/PersonalInform";
import {
  ButtonWrapper,
  FormContainer,
  SteperWrapper,
} from "../RegistrationForm.styled";
import "./register.css";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  email: string;
  mobileNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  buildingName: string;
  cityArea: string;
  landlineNumber: string;
  poBoxNumber: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  mobileNumber: "",
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  buildingName: "",
  cityArea: "",
  landlineNumber: "",
  poBoxNumber: "",
};

const RegistrationForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <PersonalInfoForm {...data} updateFields={updateFields} />,
      <OfficeDetailsForm {...data} updateFields={updateFields} />,
      <ConfirmationDetails />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    Swal.fire("Success!", "Your application has been submitted.!", "success");
  }

  return (
    <>
      <SteperWrapper style={{ marginTop: "50px" }}>
        {currentStepIndex + 1} / {steps.length}
      </SteperWrapper>
      <FormContainer>
        <form onSubmit={onSubmit}>
          {step}
          <ButtonWrapper>
            {!isFirstStep && (
              <button type="button" onClick={back} className="button">
                Back
              </button>
            )}
            <button type="submit" className="button">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </ButtonWrapper>
        </form>
      </FormContainer>
    </>
  );
};

export default RegistrationForm;
