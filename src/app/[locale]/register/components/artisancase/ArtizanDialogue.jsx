"use Client";

import { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Created from "./Created";
import Number from "./Number";
import Job from "./Job";
import Certificate from "./Certificate";
import Assurence from "./Assurence";

export default function ArtisanDialogue() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
    job: "",
    is_certified: false,
    is_assured: false, //->true
    certification_files: [],
    insurance_files: [],
  });
  return (
    <>
      {step === 1 && <Name setData={setData} setStep={setStep} />}
      {step === 2 && <Number setData={setData} setStep={setStep} />}
      {step === 3 && <Email setData={setData} setStep={setStep} />}
      {step === 4 && <Job setData={setData} setStep={setStep} />}
      {step === 5 && <Certificate setData={setData} setStep={setStep} />}
      {step === 6 && <Assurence setData={setData} setStep={setStep} />}
      {step === 7 && <Created data={data} />}
    </>
  );
}
