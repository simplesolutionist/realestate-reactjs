import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { AccountDetails } from "./stepForm/AccountDetails";
import { OfferInformation } from "./stepForm/OfferInformation";
import { TitleCompany } from "./stepForm/TitleCompany";
import { AssignmentOfContract } from "./stepForm/AssignmentOfContract";
import { PersonalProperty } from "./stepForm/PersonalProperty";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
// es-lint-disable-next-line
import styled from 'styled-components';


const defaultData = {
  firstName: "",
  email: "",
  phoneNumber: "",
  purchasePrice: "",
  escrowDeposit: "",
  downPayment: "",
  closingCosts: "",
  timeAcceptance: "",
  inspectionPeriod: "",
  closingDate: "",
  vendor:"",
  financing:"",
  vendor2:"",
  rentStatus:"",
  renter:"",
  assessments:"",
  personalproperty1:"",
  personalproperty2:"",
  comments:"",

};

const steps = [
  { id: "account details" },
  { id: "offer information" },
  { id: "title company " },
  { id: "assignment of contract " },
  { id: "personal property " },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  // es-lint-disable-next-line
  switch (step.id) {
    case "account details":
      return <AccountDetails {...props} />;
    case "offer information":
      return <OfferInformation {...props} />;
    case "title company ":
      return <TitleCompany {...props} />;
    case "assignment of contract ":
      return <AssignmentOfContract {...props} />;
    case "personal property ":
      return <PersonalProperty {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }
  
  return (
    <div>
    
    </div>
  );
};
