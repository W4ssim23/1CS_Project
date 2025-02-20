"use client";

import { Input, Button } from "@nextui-org/react";
import Pfp from "./Pfp";
import { useContext, useState } from "react";
import { GlobalContext } from "@/app/[locale]/context";
import { useTranslations } from "next-intl";

export default function ProfileForm({ pfpe, id }) {
  const t = useTranslations("/artisan");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pfp, setPfp] = useState(pfpe);

  const { userData, setUserData } = useContext(GlobalContext);

  const handleCancel = () => {
    setFormData({});
    setError(null);
  };

  const handleSubmition = async () => {
    if (Object.keys(formData).length === 0) {
      setError(t("profileForm.errors.formDataEmpty"));
      return;
    }

    if (
      formData.email &&
      (!formData.email.includes("@") || !formData.email.includes("."))
    ) {
      setError(t("profileForm.errors.invalidEmail"));
      return;
    }

    if (formData.PhoneNumber && formData.PhoneNumber.length !== 10) {
      setError(t("profileForm.errors.invalidPhoneNumber"));
      return;
    }

    if (formData.LastName && formData.LastName.length < 2) {
      setError(t("profileForm.errors.invalidLastName"));
      return;
    }

    if (
      formData.LastName &&
      formData.LastName.length < 2 &&
      formData.LastName !== userData.lastName
    ) {
      setError(t("profileForm.errors.invalidLastName"));
      return;
    }

    if (
      formData.first_name &&
      formData.first_name.length < 2 &&
      formData.first_name !== userData.firstName
    ) {
      setError(t("profileForm.errors.invalidFirstName"));
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://onecs-back.onrender.com/app/artisan/edit_artisan_profile/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, id }),
        }
      );
      const result = await response.json();
      if (response.ok) {
        console.log("good", result);

        const updatedUserData = {
          ...userData,
          firstName: formData.first_name || userData.firstName,
          lastName: formData.LastName || userData.lastName,
          phoneNumber: formData.PhoneNumber || userData.phoneNumber,
          email: formData.email || userData.email,
        };

        setUserData(updatedUserData);
        document.cookie = `userData=${JSON.stringify(
          updatedUserData
        )}; path=/;`;
        handleCancel();
      } else {
        console.error("Error:", result);
        setError(result.message || t("profileForm.errors.genericError"));
      }
    } catch (error) {
      console.error("Error:", error);
      setError(t("profileForm.errors.genericError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-[#E9E9E9] sm:px-16 py-8 items-center justify-center rounded-2xl">
      <h2 className="text-xl font-bold text-center">
        {t("profileForm.title")}
      </h2>
      <div className="flex sm:flex-row flex-col-reverse w-full items-center">
        <Infos setFormData={setFormData} formData={formData} t={t} />{" "}
        <Pfp pfp={pfp} setPfp={setPfp} id={id} t={t} />{" "}
      </div>
      {error && (
        <div className="text-red-500 p-2 rounded-lg w-full text-center">
          {error}
        </div>
      )}
      <div className="flex sm:flex-row flex-col-reverse gap-4 w-full items-center justify-evenly">
        <Button
          className="bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px] min-w-[200px]"
          size="lg"
          radius="lg"
          onPress={handleCancel}
        >
          {t("profileForm.cancelButton")}
        </Button>

        <Button
          className="bg-[#1F4690] text-white max-w-[360px] min-w-[200px]"
          size="lg"
          radius="lg"
          onPress={handleSubmition}
          isLoading={loading}
        >
          {t("profileForm.saveButton")}
        </Button>
      </div>
    </div>
  );
}

function Infos({ setFormData, formData, t }) {
  return (
    <form className="flex flex-col w-full sm:w-1/2 gap-4 p-2 items-center">
      <Input
        label={t("profileForm.firstName")}
        value={formData?.first_name || ""}
        onChange={(e) =>
          setFormData({ ...formData, first_name: e.target.value })
        }
      />
      <Input
        label={t("profileForm.lastName")}
        value={formData?.LastName || ""}
        onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
      />
      <Input
        value={formData?.PhoneNumber || ""}
        label={t("profileForm.phoneNumber")}
        onChange={(e) =>
          setFormData({ ...formData, PhoneNumber: e.target.value })
        }
      />
      <Input
        value={formData?.email || ""}
        label={t("profileForm.email")}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </form>
  );
}
