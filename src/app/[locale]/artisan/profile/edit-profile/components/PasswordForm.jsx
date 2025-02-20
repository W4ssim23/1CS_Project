"use client";

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PasswordForm({ id }) {
  const t = useTranslations("/artisan");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    if (!password || !newPassword || !confirmPassword) {
      setError(t("passwordForm.errors.allFieldsRequired"));
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError(t("passwordForm.errors.passwordsDoNotMatch"));
      return false;
    }
    if (newPassword.length < 8) {
      setError(t("passwordForm.errors.passwordTooShort"));
      return false;
    }
    setError(null);
    return true;
  };

  const handleCancel = () => {
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch(
        `https://onecs-back.onrender.com/app/client/edit-password/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            user_id: id,
            oldPassword: password,
            newPassword: newPassword,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setSuccess(false);
        throw new Error(
          data.message || t("passwordForm.errors.updatePasswordError")
        );
      }

      setSuccess(true);
      setError(null);
      console.log("Mot de passe mis à jour avec succès:", data);
      handleCancel();
    } catch (error) {
      setError(error.message);
      console.error("Erreur:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 bg-[#E9E9E9] sm:px-16 py-8 items-start justify-center rounded-2xl">
      <h2 className="text-xl font-bold w-full text-center">
        {t("passwordForm.title")}
      </h2>
      <form
        className="flex flex-col w-full sm:w-1/2 gap-4 p-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Input
          label={t("passwordForm.currentPassword")}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isDisabled={loading}
        />
        <Input
          label={t("passwordForm.newPassword")}
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          isDisabled={loading}
        />
        <Input
          label={t("passwordForm.confirmPassword")}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          isDisabled={loading}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm">
            {t("passwordForm.successMessage")}
          </p>
        )}
      </form>
      <div className="flex sm:flex-row flex-col-reverse gap-4 w-full items-center justify-evenly">
        <Button
          className="bg-transparent text-[#1F4690] border-1 border-[#1F4690] max-w-[360px] min-w-[200px]"
          size="lg"
          radius="lg"
          onPress={handleCancel}
          isDisabled={loading}
        >
          {t("passwordForm.cancelButton")}
        </Button>
        <Button
          className="bg-[#1F4690] text-white max-w-[360px] min-w-[200px]"
          size="lg"
          radius="lg"
          onPress={handleSubmit}
          isLoading={loading}
          isDisabled={loading}
        >
          {t("passwordForm.saveButton")}
        </Button>
      </div>
    </div>
  );
}
