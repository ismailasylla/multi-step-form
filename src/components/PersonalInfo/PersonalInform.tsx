import { FormWrapper } from "../FormWrapper";

type PersonalInfoData = {
  name: string;
  email: string;
  mobileNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
};

type PersonalInfoFormProps = PersonalInfoData & {
  updateFields: (fields: Partial<PersonalInfoData>) => void;
};

const PersonalInfoForm = ({
  name,
  email,
  mobileNumber,
  addressLine1,
  addressLine2,
  addressLine3,
}: PersonalInfoFormProps) => {
  return (
    <FormWrapper title="Personal Info">
      <label>Name</label>
      <input
        autoFocus
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Mobile Number</label>
      <input
        autoFocus
        required
        type="number"
        value={mobileNumber}
        onChange={(e) => updateFields({ mobileNumber: e.target.value })}
      />
      <label>Address Line 1</label>
      <input
        autoFocus
        required
        type="text"
        value={addressLine1}
        onChange={(e) => updateFields({ addressLine1: e.target.value })}
      />
      <label>Address Line 2</label>
      <input
        autoFocus
        required
        type="text"
        value={addressLine2}
        onChange={(e) => updateFields({ addressLine2: e.target.value })}
      />
      <label>Address Line 3</label>
      <input
        autoFocus
        required
        type="text"
        value={addressLine3}
        onChange={(e) => updateFields({ addressLine3: e.target.value })}
      />
    </FormWrapper>
  );
};

export default PersonalInfoForm;
