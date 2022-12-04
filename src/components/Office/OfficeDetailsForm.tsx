import { FormWrapper } from "../FormWrapper";

type PersonalInfoData = {
  buildingName: string;
  cityArea: string;
  landlineNumber: string;
  addressLine1: string;
  addressLine2: string;
  poBoxNumber: string;
};

type OfficeDetailsFormProps = PersonalInfoData & {
  updateFields: (fields: Partial<PersonalInfoData>) => void;
};

const OfficeDetailsForm = ({
  buildingName,
  cityArea,
  landlineNumber,
  addressLine1,
  addressLine2,
  poBoxNumber,
  updateFields,
}: OfficeDetailsFormProps) => {
  return (
    <FormWrapper title="Office Details">
      <label>Building Name</label>
      <input
        autoFocus
        required
        type="text"
        value={buildingName}
        onChange={(e) => updateFields({ buildingName: e.target.value })}
      />
      <label>City/Area</label>
      <input
        autoFocus
        required
        type="text"
        value={cityArea}
        onChange={(e) => updateFields({ cityArea: e.target.value })}
      />
      <label>Landline Number</label>
      <input
        autoFocus
        required
        type="number"
        value={landlineNumber}
        onChange={(e) => updateFields({ landlineNumber: e.target.value })}
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
      <label>PO Box Number</label>
      <input
        autoFocus
        required
        type="text"
        value={poBoxNumber}
        onChange={(e) => updateFields({ poBoxNumber: e.target.value })}
      />
    </FormWrapper>
  );
};

export default OfficeDetailsForm;
