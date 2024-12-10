"use Client";

import { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Created from "./Created";
import Number from "./Number";

export default function ClientDialogue() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    prenom: "",
    email: "",
    number: "",
    password: "",
  });
  return (
    <>
      {step === 1 && <Name setData={setData} setStep={setStep} />}
      {step === 2 && <Number setData={setData} setStep={setStep} />}
      {step === 3 && <Email setData={setData} setStep={setStep} />}
      {step === 4 && <Created data={data} />}
    </>
  );
}
